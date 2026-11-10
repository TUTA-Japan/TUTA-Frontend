import "client-only";

import { ApiError, isApiError } from "./errors";
import { apiRequest, joinUrl, parseApiResponse } from "./http";
import type {
  AdminCategoryDto,
  AdminProductDto,
  AdminUserDto,
  CategoryDto,
  CreateCategoryBody,
  CreateProductBody,
  DashboardStatsDto,
  LoginResultDto,
  PageDto,
  ProductStatus,
  StagedImageDto,
  UpdateCategoryBody,
  UpdateProductBody,
} from "./types";

/**
 * Browser client for `/admin/*`.
 *
 * Auth model (set by the backend):
 * - Login sets an HTTP-only session cookie, so every call uses
 *   `credentials: "include"`.
 * - Mutations must echo the CSRF token in `X-CSRF-Token`. The token comes from
 *   the login response; it is kept in memory + sessionStorage (to survive
 *   reloads), falling back to the readable `tuta_admin_csrf` cookie.
 */

const CSRF_COOKIE = "tuta_admin_csrf";
const CSRF_STORAGE_KEY = "tuta_admin_csrf";

function adminUrl(path: string): string {
  // Must be referenced literally so Next.js inlines it into the client bundle.
  const baseUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new Error("NEXT_PUBLIC_API_URL is not configured (see .env.local)");
  }
  return joinUrl(baseUrl, path);
}

let csrfToken: string | null = null;

function readCookie(name: string): string | null {
  const prefix = `${name}=`;
  const match = document.cookie
    .split("; ")
    .find((part) => part.startsWith(prefix));
  return match ? decodeURIComponent(match.slice(prefix.length)) : null;
}

function getCsrfToken(): string | null {
  if (csrfToken) return csrfToken;
  try {
    csrfToken = sessionStorage.getItem(CSRF_STORAGE_KEY);
  } catch {
    // Storage can be unavailable (private mode, blocked site data).
  }
  csrfToken ??= readCookie(CSRF_COOKIE);
  return csrfToken;
}

function setCsrfToken(token: string | null): void {
  csrfToken = token;
  try {
    if (token) sessionStorage.setItem(CSRF_STORAGE_KEY, token);
    else sessionStorage.removeItem(CSRF_STORAGE_KEY);
  } catch {
    // Memory copy is still used for this page.
  }
}

type AdminRequestInit = Omit<RequestInit, "body"> & { json?: unknown };

async function adminRequest<T>(
  path: string,
  { json, headers: initHeaders, ...init }: AdminRequestInit = {},
): Promise<T> {
  const method = (init.method ?? "GET").toUpperCase();
  const headers = new Headers(initHeaders);
  if (json !== undefined) headers.set("content-type", "application/json");
  if (method !== "GET") {
    const token = getCsrfToken();
    if (token) headers.set("x-csrf-token", token);
  }

  try {
    return await apiRequest<T>(adminUrl(path), {
      ...init,
      method,
      headers,
      body: json === undefined ? undefined : JSON.stringify(json),
      credentials: "include",
      cache: "no-store",
    });
  } catch (error) {
    // Session is gone: drop the stale CSRF token too.
    if (isApiError(error, "UNAUTHENTICATED")) setCsrfToken(null);
    throw error;
  }
}

// ---------- Authentication ----------

/** UC-A01. Throws ApiError UNAUTHENTICATED (401) or RATE_LIMITED (429). */
export async function login(
  email: string,
  password: string,
): Promise<LoginResultDto> {
  const result = await adminRequest<LoginResultDto>("/admin/auth/login", {
    method: "POST",
    json: { email, password },
  });
  setCsrfToken(result.csrfToken);
  return result;
}

export async function logout(): Promise<void> {
  try {
    await adminRequest<void>("/admin/auth/logout", { method: "POST" });
  } finally {
    setCsrfToken(null);
  }
}

/** UC-A03: current admin, or `null` when not logged in. */
export async function getCurrentAdmin(): Promise<AdminUserDto | null> {
  try {
    const { admin } = await adminRequest<{ admin: AdminUserDto }>(
      "/admin/auth/me",
    );
    return admin;
  } catch (error) {
    if (isApiError(error, "UNAUTHENTICATED")) return null;
    throw error;
  }
}

// ---------- Dashboard & products ----------

export function getDashboardStats(): Promise<DashboardStatsDto> {
  return adminRequest<DashboardStatsDto>("/admin/dashboard/stats");
}

/** UC-A05: 20 per page, newest first. `q` matches nameVi/nameJp/brand. */
export function listProducts(
  params: { page?: number; status?: ProductStatus; q?: string } = {},
): Promise<PageDto<AdminProductDto>> {
  const search = new URLSearchParams();
  if (params.page) search.set("page", String(params.page));
  if (params.status) search.set("status", params.status);
  if (params.q?.trim()) search.set("q", params.q.trim());
  const query = search.size ? `?${search}` : "";
  return adminRequest<PageDto<AdminProductDto>>(`/admin/products${query}`);
}

export function getProduct(id: string): Promise<AdminProductDto> {
  return adminRequest<AdminProductDto>(
    `/admin/products/${encodeURIComponent(id)}`,
  );
}

/** UC-A06. Errors: VALIDATION_ERROR (422, see `fields`), SLUG_TAKEN (409). */
export function createProduct(
  body: CreateProductBody,
): Promise<AdminProductDto> {
  return adminRequest<AdminProductDto>("/admin/products", {
    method: "POST",
    json: body,
  });
}

/** UC-A08. See `UpdateProductBody` for why status/isFeatured are required. */
export function updateProduct(
  id: string,
  body: UpdateProductBody,
): Promise<AdminProductDto> {
  return adminRequest<AdminProductDto>(
    `/admin/products/${encodeURIComponent(id)}`,
    { method: "PATCH", json: body },
  );
}

/** UC-A09: soft delete. */
export function deleteProduct(id: string): Promise<void> {
  return adminRequest<void>(`/admin/products/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

// ---------- Categories ----------

export async function listCategories(): Promise<AdminCategoryDto[]> {
  const { items } = await adminRequest<{ items: AdminCategoryDto[] }>(
    "/admin/categories",
  );
  return items;
}

export function createCategory(body: CreateCategoryBody): Promise<CategoryDto> {
  return adminRequest<CategoryDto>("/admin/categories", {
    method: "POST",
    json: body,
  });
}

export function updateCategory(
  id: string,
  body: UpdateCategoryBody,
): Promise<CategoryDto> {
  return adminRequest<CategoryDto>(
    `/admin/categories/${encodeURIComponent(id)}`,
    { method: "PATCH", json: body },
  );
}

/**
 * UC-A12. Throws CATEGORY_NOT_EMPTY (409) while ANY product references the
 * category, including soft-deleted ones (the admin list count excludes those).
 */
export function deleteCategory(id: string): Promise<void> {
  return adminRequest<void>(`/admin/categories/${encodeURIComponent(id)}`, {
    method: "DELETE",
  });
}

// ---------- Image upload ----------

export type UploadOptions = {
  /** Called with a value between 0 and 1 while the file is sent. */
  onProgress?: (fraction: number) => void;
  signal?: AbortSignal;
};

/**
 * UC-A07: upload one JPEG/PNG/WebP (≤ 5 MB). Resolves to a staged image whose
 * `id` goes into `imageIds` of create/update product within 24 hours.
 *
 * Uses XMLHttpRequest because `fetch` cannot report upload progress.
 */
export function uploadProductImage(
  file: File,
  { onProgress, signal }: UploadOptions = {},
): Promise<StagedImageDto> {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason);
      return;
    }

    const xhr = new XMLHttpRequest();
    xhr.open("POST", adminUrl("/admin/uploads"));
    xhr.withCredentials = true;
    xhr.responseType = "json";
    const token = getCsrfToken();
    if (token) xhr.setRequestHeader("x-csrf-token", token);

    xhr.upload.onprogress = (event) => {
      if (event.lengthComputable) onProgress?.(event.loaded / event.total);
    };
    xhr.onload = () => {
      try {
        resolve(parseApiResponse<StagedImageDto>(xhr.status, xhr.response));
      } catch (error) {
        if (isApiError(error, "UNAUTHENTICATED")) setCsrfToken(null);
        reject(error);
      }
    };
    xhr.onerror = () =>
      reject(new ApiError(0, "NETWORK_ERROR", "Không thể tải ảnh lên"));
    xhr.onabort = () =>
      reject(signal?.reason ?? new DOMException("Aborted", "AbortError"));
    signal?.addEventListener("abort", () => xhr.abort(), { once: true });

    const form = new FormData();
    form.append("file", file);
    xhr.send(form);
  });
}

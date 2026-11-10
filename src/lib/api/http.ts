import { ApiError } from "./errors";

/** Join a base URL (with or without a path prefix) and an absolute API path. */
export function joinUrl(baseUrl: string, path: string): string {
  return `${baseUrl.replace(/\/+$/, "")}${path}`;
}

/**
 * Turn a backend response into its `data` payload or throw `ApiError`.
 * Success bodies are `{ data }`; 204 responses resolve to `undefined`.
 */
export function parseApiResponse<T>(status: number, body: unknown): T {
  if (status < 200 || status >= 300) {
    throw ApiError.fromResponse(status, body);
  }
  if (status === 204) return undefined as T;
  return (body as { data: T }).data;
}

/**
 * Thin wrapper over the native `fetch`.
 *
 * Native `fetch` is used on purpose: Next.js caches, tags, revalidates, and
 * de-duplicates `fetch` calls, which a third-party HTTP client would bypass.
 */
export async function apiRequest<T>(
  url: string,
  init?: RequestInit,
): Promise<T> {
  let response: Response;
  try {
    response = await fetch(url, init);
  } catch (cause) {
    throw new ApiError(
      0,
      "NETWORK_ERROR",
      "Không thể kết nối tới máy chủ",
      undefined,
      { cause },
    );
  }

  const body: unknown =
    response.status === 204 ? null : await response.json().catch(() => null);
  return parseApiResponse<T>(response.status, body);
}

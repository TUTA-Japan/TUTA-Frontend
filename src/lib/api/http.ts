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

/** Longest wait for a read (GET) request, including reading the body. */
export const API_READ_TIMEOUT_MS = 10_000;

/**
 * Thin wrapper over the native `fetch`.
 *
 * Native `fetch` is used on purpose: Next.js caches, tags, revalidates, and
 * de-duplicates `fetch` calls, which a third-party HTTP client would bypass.
 *
 * GET requests reject with `TIMEOUT` after `timeoutMs` (default
 * `API_READ_TIMEOUT_MS`), so an unresponsive backend fails a render or build
 * quickly instead of hanging it. Other methods have no default timeout: giving
 * up on a write the server may still complete invites a duplicate retry.
 *
 * The timeout races the request instead of passing an `AbortSignal`, because a
 * signal opts the `fetch` out of Next.js request memoization.
 */
export function apiRequest<T>(
  url: string,
  init?: RequestInit,
  timeoutMs: number | undefined = isRead(init)
    ? API_READ_TIMEOUT_MS
    : undefined,
): Promise<T> {
  const request = send<T>(url, init);
  if (timeoutMs === undefined) return request;

  let timer: ReturnType<typeof setTimeout> | undefined;
  const timeout = new Promise<never>((_, reject) => {
    timer = setTimeout(
      () =>
        reject(
          new ApiError(
            0,
            "TIMEOUT",
            `Máy chủ không phản hồi sau ${timeoutMs / 1000} giây`,
          ),
        ),
      timeoutMs,
    );
  });
  return Promise.race([request, timeout]).finally(() => clearTimeout(timer));
}

function isRead(init?: RequestInit): boolean {
  return (init?.method ?? "GET").toUpperCase() === "GET";
}

async function send<T>(url: string, init?: RequestInit): Promise<T> {
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

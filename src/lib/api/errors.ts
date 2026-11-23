export type ApiFieldErrors = Record<string, string[]>;

/**
 * Error thrown for every failed backend call.
 *
 * `code` mirrors the backend `error.code` (e.g. VALIDATION_ERROR, SLUG_TAKEN,
 * PRODUCT_NOT_FOUND, RATE_LIMITED, CSRF_REJECTED, UNAUTHENTICATED).
 * `fields` holds per-field messages for 422 responses, keyed by request field.
 * Network failures use `status: 0` and `code: "NETWORK_ERROR"`.
 */
export class ApiError extends Error {
  constructor(
    readonly status: number,
    readonly code: string,
    message: string,
    readonly fields?: ApiFieldErrors,
    options?: ErrorOptions,
  ) {
    super(message, options);
    this.name = "ApiError";
  }

  /** Build from a backend `{ error: { code, message, fields } }` body. */
  static fromResponse(status: number, body: unknown): ApiError {
    const error =
      typeof body === "object" && body !== null && "error" in body
        ? (body as { error?: Partial<ApiErrorBody> }).error
        : undefined;

    return new ApiError(
      status,
      error?.code ?? "UNKNOWN_ERROR",
      error?.message ?? `Request failed with status ${status}`,
      error?.fields,
    );
  }
}

type ApiErrorBody = {
  code: string;
  message: string;
  fields: ApiFieldErrors;
};

export function isApiError(error: unknown, code?: string): error is ApiError {
  return (
    error instanceof ApiError && (code === undefined || error.code === code)
  );
}

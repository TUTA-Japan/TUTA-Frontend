/**
 * The `digest` Next.js attaches to errors thrown by Server Components. In
 * production it is the only detail sent to the browser, and it matches the
 * entry in the server logs.
 */
export function getErrorDigest(error: unknown): string | undefined {
  if (typeof error === "object" && error !== null && "digest" in error) {
    return typeof error.digest === "string" ? error.digest : undefined;
  }
  return undefined;
}

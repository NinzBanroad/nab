export const LOCAL_SITE_URL = "http://localhost:3000";

/**
 * Resolves the public origin from NEXT_PUBLIC_SITE_URL. Falls back to localhost (with a build
 * warning in production) so local builds work, and rejects anything that is not an http(s) URL.
 */
export function resolveSiteUrl(rawUrl: string | undefined, nodeEnv: string | undefined): string {
  if (!rawUrl) {
    if (nodeEnv === "production") {
      console.warn(
        `NEXT_PUBLIC_SITE_URL is not set; metadata, sitemap and robots will point at ${LOCAL_SITE_URL}.`,
      );
    }
    return LOCAL_SITE_URL;
  }

  const parsedUrl = new URL(rawUrl);
  if (parsedUrl.protocol !== "https:" && parsedUrl.protocol !== "http:") {
    throw new Error(`NEXT_PUBLIC_SITE_URL must be an http(s) URL, received "${rawUrl}".`);
  }
  return parsedUrl.origin;
}

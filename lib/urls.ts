/**
 * True for a specific profile URL (https://github.com/someone), false for a bare platform home page
 * (https://github.com) or anything unparsable. Placeholders must not reach structured data.
 */
export function isProfileUrl(href: string): boolean {
  try {
    return new URL(href).pathname.replace(/\/+$/, "") !== "";
  } catch {
    return false;
  }
}

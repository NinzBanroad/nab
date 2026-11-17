import { site } from "@/content";
import { isProfileUrl } from "@/lib/urls";

/**
 * schema.org Person data, built only from static content. `<` is escaped so no value can close the
 * script element (Next.js JSON-LD guide).
 */
export function PersonJsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.title,
    url: site.url,
    email: `mailto:${site.email}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: site.address.locality,
      addressRegion: site.address.region,
      addressCountry: site.address.countryCode,
    },
    knowsAbout: site.strengths,
    sameAs: site.socialLinks.map(({ href }) => href).filter(isProfileUrl),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(person).replace(/</g, "\\u003c") }}
    />
  );
}

import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // A list of all locales that are supported
  locales: ["en", "fr", "de", "it", "es"],

  // Used when no locale matches
  defaultLocale: "en",
  pathnames: {
    "/contact-us": {
      en: "/contact-us",
      fr: "/contactez-moi",
      de: "/kontaktiere-mich",
      it: "/contattaci",
      es: "/contacta-con-nosotras"
    },
    "/blog/[slug]": {
      en: "/blog/[slug]",
      fr: "/blogue/[slug]",
      de: "/blog/[slug]",
      it: "/blog/[slug]",
      es: "/blog/[slug]"
    }
  },
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export type Locale = (typeof routing.locales)[number];
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
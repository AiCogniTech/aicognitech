// app/sitemap.ts
import { MetadataRoute } from 'next';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://aicognitech.com/';
  const locales = ["en", "fr", "de", "it", "es"];

  // Define static routes (relative to the site root).
  // Adjust these as needed.
  const staticRoutes = [
    '',            // Home page
    'contact-us',  // Contact page (for default locale)
    'blog',        // Blog index
    // Add any additional static routes here
  ];

  // Generate a sitemap entry for every route in every locale.
  const routes = locales.flatMap((locale) => {
    return staticRoutes.map((route) => {
      // If the locale is the default ('en'), you might want to omit the locale prefix.
      const isDefault = locale === 'en';
      // Build the path – for non‑default locales, prefix the route with the locale.
      const path = route
        ? `${isDefault ? '' : locale + '/'}${route}`
        : (isDefault ? '' : locale);
      return {
        url: `${baseUrl}${path}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1 : 0.8,
      };
    });
  });

  return routes;
}

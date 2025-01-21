module.exports = {
    locales: ['en', 'es', 'de', 'it', 'fr'], // English, Spanish, German, Italian, French
    defaultLocale: 'en', // Set English as the default language
    pages: {
      '*': ['common'], // Dynamically load translations for all pages
    },
  };
  
/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tonuxcorp.dev",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://tonuxcorp.dev/fr",
      hreflang: "fr",
    },
    {
      href: "https://tonuxcorp.dev/en",
      hreflang: "en",
    },
  ],
};

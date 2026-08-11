/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://tonuxcorp.com",
  generateRobotsTxt: true,
  alternateRefs: [
    {
      href: "https://tonuxcorp.com/fr",
      hreflang: "fr",
    },
    {
      href: "https://tonuxcorp.com/en",
      hreflang: "en",
    },
  ],
};

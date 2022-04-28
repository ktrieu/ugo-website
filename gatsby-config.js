module.exports = {
  siteMetadata: {
    title: "UGO II",
    titleTemplate: "%s | UGO II",
    description: "UGO II. Our product is.",
    url: "https://ugo-ii.com",
    navLinks: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "About",
        link: "/about",
      },
      {
        name: "History",
        link: "/history",
      },
      {
        name: "Products",
        link: "/products",
      },
      {
        name: "Careers",
        link: "/careers",
      },
    ],
  },
  plugins: [
    "gatsby-plugin-postcss",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: "./src/content/",
      },
      __key: "content",
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-remark",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `UGO II`,
        short_name: `UGO II`,
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#027a0e`,
        display: `standalone`,
        icon: "./src/images/icon.svg",
      },
    },
    {
      resolve: "gatsby-plugin-google-gtag",
      options: {
        trackingIds: ["G-S4MKTL5V9Z"],
      },
    },
  ],
};

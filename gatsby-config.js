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
  ],
};

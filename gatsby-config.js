module.exports = {
  siteMetadata: {
    title: "ugo-website",
    navLinks: [
      {
        name: "Home",
        link: "/",
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

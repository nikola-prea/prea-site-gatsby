module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "prea-site-gatsby",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress",
      options: {
        url: "",
      },
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

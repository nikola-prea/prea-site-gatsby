module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "prea-site-gatsby",
  },
  plugins: [
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     url: 'https://website-v2-0.ey.r.appspot.com/graphql',
    //     schema: {
    //       typePrefix: 'WP',
    //     },
    //     develop: {
    //       hardCacheMediaFiles: true,
    //     },
    //     type: {
    //       Post: {
    //         limit: process.env.NODE_ENV === 'development' ? 400 : 10_000,
    //       },
    //     },
    //   },
    // },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: 'gatsby-plugin-fresnel',
      options: {
        breakpoints: {
          sm: 375,
          md: 768,
          lg: 1070,
          xl: 1260,
        },
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

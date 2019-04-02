module.exports = {
  siteMetadata: {
    title: `Tonye Dickson`,
    description: `Tonye Dickson | Frontend Designer and Developer.`,
    author: `@psybuglite`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages/writing`,
        name: "writing",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // replace "UA-XXXXXXXXX-X" with your own Tracking ID
        trackingId: "UA-137482739-1",
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          `gatsby-remark-reading-time`
          // calculates the time it will take to read through a blog post
        ], // just in case those previously mentioned remark plugins sound cool :)
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-catch-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Tonye Dickson`,
        short_name: `Tonye`,
        start_url: `/`,
        background_color: `#045894`,
        theme_color: `#045894`,
        display: `minimal`,
        icon: `src/images/tonye-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}

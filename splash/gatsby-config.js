module.exports = {
  siteMetadata: {
    title: `HobbyHire`,
    description: `Hire people who enjoy and have experience in the things you need help with like shopping for clothes at the mall, working out at the gym, tutoring for school, preparing for job interviews, and more.`,
    author: `@hobbyhireapp`,
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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/hobbyhire-fav.jpg`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-mailchimp`,
      options: {
        endpoint: `https://gmail.us3.list-manage.com/subscribe/post?u=7d50594e5bcb412b46e548db6&amp;id=d66a9afc43`,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

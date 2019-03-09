module.exports = {
  siteMetadata: {
    title: "Billy Schulze Profile",
    author: "Billy Schulze",
    description: "Profile website of Billy Schulze"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `vfgdl7bqcgm2`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: `29acd2803e61325f870a1e65aacb4ad2319357f4bbb9e5a9187faf4cceb0c0af`,
      },
    },
  ],
}

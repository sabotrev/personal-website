module.exports = {
    siteMetadata: {
        siteUrl: 'https://www.trevorsabo.com',
        title: 'Trevor Sabo',
        description: `Trevor Sabo's Personal Website`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        'gatsby-plugin-netlify',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'Trevor Sabo',
                start_url: `/`,
                icon: 'src/images/icon.png',
            },
        },
    ],
};

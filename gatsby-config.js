const dotenv = require("dotenv")

if (process.env.ENVIRONMENT !== "production") {
  dotenv.config()
}

console.log(process.env.CONTENTFUL_SPACE_ID, process.env.CONTENTFUL_ACCESS_TOKEN)

module.exports = {
  siteMetadata: {
    title: `Gatsby Typescript Starter`,
    subtitle: `Sub Title`,
    copyright: `Copyright © 2020 WWW.YAMBAL.NET`,
    authors: [
      { name: 'Tori', slug: 'tori' },
      { name: 'Neko', slug: 'neko' },
      { name: 'Inu', slug: 'inu' }
    ]
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-typescript`,
      compilerOptions: {
        target: `es2015`,
        jsx: `react`
      }
    },
    {
      resolve: 'gatsby-plugin-graphql-codegen',
      options: {
        fileName: `types/graphql-types.d.ts`
      }
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    }
  ]
}

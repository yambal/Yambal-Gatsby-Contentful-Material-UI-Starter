/**
 * Algolia : 検索インデックス用クエリ
 * これは gatsby-config.js で指名され、プラグイン（gatsby-plugin-algolia）によってインデックスされる
 * build コマンド時に実行される（dev コマンドでは実行されない）
 * https://www.gatsbyjs.org/docs/adding-search-with-algolia/
 * https://crudzoo.com/blog/algolia
 **/
const indexName = `Posts`

const pageQuery = `{
  pages: allContentfulBlogPost(limit: 10) {
    edges {
      node {
        id
        title
        slug
        description {
          description
        }
        body {
          childMarkdownRemark {
            excerpt
            headings {
              value
            }
          }
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ node: { id, slug, title, description, body } }) {
  return {
    objectID: id,
    slug,
    title,
    description: description.description,
    excerpt: body.childMarkdownRemark.excerpt
  }
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => data.pages.edges.map(pageToAlgoliaRecord),
    indexName,
    settings: { attributesToSnippet: [`excerpt:20`] },
  },
]

module.exports = queries
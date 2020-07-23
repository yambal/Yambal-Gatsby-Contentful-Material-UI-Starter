import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexHomeQuery } from "../../types/graphql-types"
import { PageWrapper } from "../layouts/PageWrapper"
// ______________________________________________________
//
type Props = {
  data: IndexHomeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => (
  <PageWrapper>
    <h1>Hi people</h1>
    <strong>{data.site?.siteMetadata?.title}</strong> site.
    <p>Welcome to your new </p>
    <p>Now go build something great.</p>
    <ul>
      <li>
        <Link to="/page-2/">Go to page 2</Link>
      </li>
      <li>
        <Link to="/persons/">Go to authors</Link>
      </li>
      {data.allContentfulBlogPost.edges.map(
        (post) => {
          return (
            <li>
              <Link to={`/post/${post.node.slug}`}>{post.node.title}</Link>
            </li>
          )
        }
      )}
    </ul>
  </PageWrapper>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHome {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Component

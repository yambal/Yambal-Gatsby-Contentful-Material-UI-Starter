import * as React from "react"
import { Link, graphql } from "gatsby"
import { IndexHomeQuery } from "../../types/graphql-types"
import { PageWrapper } from "../layouts/PageWrapper"
import SiteMetaDataContext from "../components/SiteMetaData/SiteMetaDataContext"

// ______________________________________________________
//
type Props = {
  data: IndexHomeQuery
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ data }) => {
  const meta = React.useContext(SiteMetaDataContext)

  const title = React.useMemo(
    () => {
      return meta.site?.siteMetadata?.title
    },
    [meta]
  )

  const subTitle = React.useMemo(
    () => {
      return meta.site?.siteMetadata?.subtitle
    },
    [meta]
  )

  return (
    <PageWrapper>
      <h1>Hi people</h1>
      <strong>{title}[{subTitle}]</strong>
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
          (post, index) => {
            return (
              <li key={index}>
                <Link to={`/post/${post.node.slug}`}>{post.node.title}</Link>
              </li>
            )
          }
        )}
      </ul>
    </PageWrapper>
  )
}
// ______________________________________________________
//
export const pageQuery = graphql`
  query IndexHome {
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

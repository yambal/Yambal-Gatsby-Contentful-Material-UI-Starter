import * as React from "react"
import { Link } from "gatsby"
import { BlogPostPageContext } from "../../gatsby-node/createBlogPostPage"
import { PageWrapper } from "../layouts/PageWrapper"
// ______________________________________________________
//
type Props = {
  pageContext: BlogPostPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <PageWrapper description={pageContext.title}>
    <h1>{pageContext.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: pageContext.body.childMarkdownRemark.html }} />
    <ul>
      <li>
        <Link to="/persons/">Back to authors</Link>
      </li>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </PageWrapper>
)
// ______________________________________________________
//
export default Component

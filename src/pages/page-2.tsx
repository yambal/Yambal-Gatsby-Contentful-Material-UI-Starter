import * as React from "react"
import { Link } from "gatsby"
import { PageWrapper } from "../layouts/PageWrapper"
// ______________________________________________________
//
const Component: React.FC = () => (
  <PageWrapper description="second page">
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <ul>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </PageWrapper>
)
// ______________________________________________________
//
export default Component

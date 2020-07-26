import * as React from "react"
import { Link } from "gatsby"
import { PersonsPageContext } from "../../gatsby-node/createPersonsPage"
import { PageWrapper } from "../layouts/PageWrapper"
// ______________________________________________________
//
type Props = {
  pageContext: PersonsPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <PageWrapper>
    <h1>{pageContext.person.name}</h1>
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

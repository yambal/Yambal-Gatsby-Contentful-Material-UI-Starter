import * as React from "react"
import { Link } from "gatsby"
import { PersonsPageContext } from "../../gatsby-node/createPersonsPage"
// ______________________________________________________
//
type Props = {
  pageContext: PersonsPageContext
}
// ______________________________________________________
//
const Component: React.FC<Props> = ({ pageContext }) => (
  <div>
    <h1>Author name is {pageContext.person.name}</h1>
    <ul>
      <li>
        <Link to="/persons/">Back to authors</Link>
      </li>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </div>
)
// ______________________________________________________
//
export default Component

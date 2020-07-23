import * as React from "react"
import { Link, graphql } from "gatsby"
import { PersonsQuery } from "../../types/graphql-types"
import { PageWrapper } from "../layouts/PageWrapper"

// ______________________________________________________
//
type Props = {
  data: PersonsQuery
}
// ______________________________________________________
//
const Persons: React.FC<Props> = ({ data }) => (
  <PageWrapper description="Persons">
    <h1>Persons</h1>
    <ul>
      {data.allContentfulPerson.edges.map(
        person =>
          person.node.id && (
            <li key={person.node.id}>
              <Link to={`/person/${person.node.id}`}>{person.node.name} ({person.node.title})</Link>
            </li>
          )
      )}
    </ul>
    <ul>
      <li>
        <Link to="/">Back to top</Link>
      </li>
    </ul>
  </PageWrapper>
)
// ______________________________________________________
//
export const pageQuery = graphql`
  query Persons {
    allContentfulPerson {
      edges {
        node {
          title
          name
          id
          contentful_id
        }
      }
    }
  }
`
// ______________________________________________________
//
export default Persons

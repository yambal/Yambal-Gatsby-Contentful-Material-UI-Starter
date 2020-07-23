import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
import { Site, PersonsQuery, ContentfulPerson } from "../types/graphql-types"
// ______________________________________________________
//
export type PersonsPageContext = {
  person: Pick<ContentfulPerson, "title" | "name" | "id" | "contentful_id">
}
// ______________________________________________________
//
const query = `
{
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
export const createPersonPages = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<PersonsQuery>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { data } = result
  for (let person of result.data.allContentfulPerson.edges) {
    console.log(person)
    if (person) {
      createPage<PersonsPageContext>({
        path: `/person/${person.node.id}/`,
        component: path.resolve("src/templates/person.tsx"),
        context: { person: person.node }
      })
    }
    
  }
}

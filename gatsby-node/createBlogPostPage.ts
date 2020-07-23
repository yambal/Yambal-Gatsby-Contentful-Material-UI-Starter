import path from "path"
import { Actions, CreatePagesArgs } from "gatsby"
import { Site, PersonsQuery, ContentfulPerson } from "../types/graphql-types"
// ______________________________________________________
//

// ______________________________________________________
//
const query = `
{
  allContentfulBlogPost {
    edges {
      node {
        id
        title
        slug
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
}
`
// ______________________________________________________
//
export type BlogPostPageContext = {
  slug: string
  title: string
  body: {
    childMarkdownRemark: {
      html: string
    }
  }
}
interface iBlogPosts {
  allContentfulBlogPost: {
    edges: {
      node: BlogPostPageContext
    }[]
  }
}
export const createBlogPostPage = async ({ graphql, createPage }: {
  graphql: CreatePagesArgs['graphql'],
  createPage: Actions['createPage']
}) => {
  const result = await graphql<iBlogPosts>(query)
  if (result.errors || !result.data) {
    throw result.errors
  }
  const { data } = result
  for (let post of result.data.allContentfulBlogPost.edges) {
    console.log(39, post)
    const { node: { slug } } = post
    if (post) {
      createPage<BlogPostPageContext>({
        path: `/post/${slug}/`,
        component: path.resolve("src/templates/post.tsx"),
        context: {
          title: post.node.title,
          slug: post.node.slug,
          body: post.node.body
        }
      })
    }
  }
 
}

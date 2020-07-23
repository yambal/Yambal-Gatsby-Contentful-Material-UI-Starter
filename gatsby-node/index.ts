import { GatsbyNode } from "gatsby"
import { createPersonPages } from './createPersonsPage'
import { createBlogPostPage } from './createBlogPostPage'
// ______________________________________________________
//
export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions: { createPage }
}) => Promise.all([
  await createPersonPages({ graphql, createPage }),
  await createBlogPostPage({ graphql, createPage }),
])

import * as React from "react"
import Helmet from "react-helmet"
import { Header } from "../components/header"

import styled from "styled-components"
import { StaticQuery } from "gatsby"

const Wrapper = styled.div``
// ______________________________________________________
//
interface iComponent {
  description?: string
  siteMetadata: {
    title: string
  }
}

const Component: React.FC<iComponent> = props => {
  const { description, siteMetadata: { title }} = props

  const metaTitle = React.useMemo(
    () => {
      if (description) {
        return `${description} - ${title}`
      }
      return title
    },
    [props.description]
  )

  return (
    <Wrapper>
      <Helmet
        title={metaTitle}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" }
        ]}
      />
      <Header />
      <div
        style={{
          margin: "0 auto",
          maxWidth: 960,
          padding: "0px 1.0875rem 1.45rem",
          paddingTop: 0
        }}
      >
        {props.children}
      </div>
    </Wrapper>
  )
}

interface iPageWrapper {
  description?: string
}

export const pageQuery = graphql`
  query HeaderSiteMetadata {
    site {
      siteMetadata {
        title
      }
    }
  }
`
export const PageWrapper: React.FC<iPageWrapper> = props => (
  <StaticQuery
    query={pageQuery}
    render={
      (data) => <Component
        siteMetadata={data.site.siteMetadata}
        description={props.description}
      >{props.children}</Component>
    }
  />
)
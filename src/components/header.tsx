import * as React from "react"
import { Link, StaticQuery } from "gatsby"
import styled from "styled-components"
import { invert } from 'polished'
// ______________________________________________________
//
const HeaderWrapper = styled.div`
  background: #663399;
  a {
    color: ${invert(`#663399`)};
    text-decoration: "none";
  };
`
interface iComponent {
  siteMetadata: {
    title: string
  }
}

const Component: React.FC<iComponent> = props => (
  <HeaderWrapper>
    <div
      style={{
        margin: "0 auto",
        maxWidth: 960,
        padding: "1.45rem 1.0875rem"
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
        >
          {props.siteMetadata.title}
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
)

export const pageQuery = graphql`
  query HeaderSuteTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export const Header: React.FC = () => (
  <StaticQuery
    query={pageQuery}
    render={
      (data) => <Component
        siteMetadata={data.site.siteMetadata}
      />
    }
  />
)

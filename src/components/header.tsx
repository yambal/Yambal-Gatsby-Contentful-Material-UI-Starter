import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { invert } from 'polished'
import SiteMetaDataContext from "./SiteMetaData/SiteMetaDataContext"

// ______________________________________________________
//
const HeaderWrapper = styled.div`
  background: #663399;
  a {
    color: ${invert(`#663399`)};
    text-decoration: "none";
  };
`

export const Header: React.FC = props => {
  const data = React.useContext(SiteMetaDataContext)
  const title = data.site?.siteMetadata?.title || '???'
  return(
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
          {title}
        </Link>
      </h1>
    </div>
  </HeaderWrapper>
  )
}
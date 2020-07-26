import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import SiteMetaDataContext from "./SiteMetaDataContext"
import { SiteMetaDataProviderQuery } from "../../../types/graphql-types"

export const SiteMetaDataProvider: React.FC = (props) => {
  const siteMetaData = useStaticQuery<SiteMetaDataProviderQuery>(graphql`query SiteMetaDataProvider {
    site {
      siteMetadata {
        title,
        subtitle,
        copyright
      }
    }
  }`)

  return (
    <SiteMetaDataContext.Provider
      value={siteMetaData}
    >
      {props.children}
    </SiteMetaDataContext.Provider>
  )
}


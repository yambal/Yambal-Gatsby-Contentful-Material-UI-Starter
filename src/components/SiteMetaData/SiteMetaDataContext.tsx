import React from "react"
import { SiteMetaDataProviderQuery } from "../../../types/graphql-types"

const defaultContext:SiteMetaDataProviderQuery = {
  site: {
    siteMetadata: {
      title: 'this is default...',
      subtitle: 'this is default...'
    }
  }
}

const SiteMetaDataContext = React.createContext(defaultContext)

export default SiteMetaDataContext
import * as React from "react"
import Helmet from "react-helmet"
import SiteMetaDataContext from "../components/SiteMetaData/SiteMetaDataContext"

export interface iHeaderHelmet {
  pageTitle?: string
  description?: string
}

export const HeaderHelmet:React.FC<iHeaderHelmet> = props => {
  const { site } = React.useContext(SiteMetaDataContext)
  const title = site?.siteMetadata?.title

  const { pageTitle, description } = props
  const metaTitle = React.useMemo(
    () => {
      if (pageTitle) {
        return `${pageTitle} - ${title}`
      }
      return title || 'hoge'
    },
    [props.description, title]
  )

  return (
  <Helmet
    title={metaTitle}
    meta={[
      { name: "description", content: description },
      { name: "keywords", content: "sample, something" }
    ]}
  />)
}
import * as React from "react"
import { Divider, Container, Typography } from "@material-ui/core"
import SiteMetaDataContext from "./SiteMetaData/SiteMetaDataContext"

export const Footer: React.FC = () => {
  const siteMetaDataContext = React.useContext(SiteMetaDataContext)
  return (
    <footer>
      <Divider />
      <Container>
        <Typography>
          {siteMetaDataContext.site?.siteMetadata?.copyright}
        </Typography>
      </Container>
    </footer>
  )
}
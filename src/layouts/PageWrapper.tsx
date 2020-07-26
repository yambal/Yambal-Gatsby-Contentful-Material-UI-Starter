import * as React from "react"
import styled from "styled-components"
import { Header } from "../components/header"
import { SiteMetaDataProvider } from "../components/SiteMetaData/SiteMetaDataProvider"
import { HeaderHelmet, iHeaderHelmet } from "./HeaderHelmet"

interface iComponent extends iHeaderHelmet {

}

const Wrapper = styled.div``

export const PageWrapper: React.FC<iComponent> = props => {
  const { pageTitle, description } = props

  return (
    <SiteMetaDataProvider>
      <Wrapper>
        <HeaderHelmet
          pageTitle={pageTitle}
          description={description}
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
    </SiteMetaDataProvider>
  )
}
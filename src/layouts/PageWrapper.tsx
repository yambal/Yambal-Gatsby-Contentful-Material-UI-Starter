import * as React from "react"
import styled from "styled-components"
import { Header } from "../components/Header"
import { SiteMetaDataProvider } from "../components/SiteMetaData/SiteMetaDataProvider"
import { HeaderHelmet, iHeaderHelmet } from "./HeaderHelmet"
import { ThemeProvider } from '@material-ui/core/styles'
import { muiTheme } from '../theming/muiTheme'
import { CssBaseline, Container, List, ListItem, ListItemText, Toolbar, SwipeableDrawer, Hidden, Divider } from "@material-ui/core"
import { Footer } from "../components/Footer"

interface iComponent extends iHeaderHelmet {
  appBarPosition?: 'static' | 'fixed'
}

const MobileDrawer = styled(SwipeableDrawer)`
  .MuiPaper-root {
    width: 240px;
  }
`
const Main = styled.main``
const SideBar = styled.nav``

const BoddyLayout = styled(Container)`
  display: flex;
  ${Main} {
    flex-shrink: 1;
    flex-grow: 1;
  }

  ${SideBar} {
    flex-shrink: 0;
    flex-grow: 0;
    width: 240px;
  }
`

export const PageWrapper: React.FC<iComponent> = props => {
  const { pageTitle, description, children, appBarPosition = 'fixed' } = props

  const [drawerIsOpen, setDrawerIsOpen] = React.useState(false)
  const drawerToggleHandler = React.useCallback(
    () => {
      drawerIsOpen ? setDrawerIsOpen(false) : setDrawerIsOpen(true)
    },
    [drawerIsOpen]
  )

  const onDrawerOpen = React.useCallback(
    (event: React.SyntheticEvent) => {
      setDrawerIsOpen(true)
    },
    []
  )

  const onDrawerClose = React.useCallback(
    (event: React.SyntheticEvent) => {
      setDrawerIsOpen(false)
    },
    []
  )

  const InnerDrawer = () => {
    return (
      <React.Fragment>
        <List>
          <ListItem>
            <ListItemText primary='Hello' />
          </ListItem>
        </List>
      </React.Fragment>
    )
  }

  return (
    <SiteMetaDataProvider>
      <ThemeProvider theme={muiTheme}>
      <CssBaseline />
        <HeaderHelmet
          pageTitle={pageTitle}
          description={description}
        />
        <Header
          position={appBarPosition}
          menuIconHandler={drawerToggleHandler}
        />
        <MobileDrawer
          anchor='left'
          open={drawerIsOpen}
          onClose={onDrawerClose}
          onOpen={onDrawerOpen}
        >
          <Toolbar />
          <Divider />
          {InnerDrawer()}
        </MobileDrawer>
        <BoddyLayout>
          <Main>
            <Toolbar/>
            {children}
          </Main>
          <Hidden smDown={true}>
            {/* side-menu */}
            <SideBar>
              <Toolbar />
              {InnerDrawer()}
            </SideBar>
          </Hidden>
        </BoddyLayout>
        <Footer />
      </ThemeProvider>
    </SiteMetaDataProvider>
  )
}
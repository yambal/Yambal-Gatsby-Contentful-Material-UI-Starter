import * as React from "react"
import styled from "styled-components"
import { Header } from "../components/header"
import { SiteMetaDataProvider } from "../components/SiteMetaData/SiteMetaDataProvider"
import { HeaderHelmet, iHeaderHelmet } from "./HeaderHelmet"
import { createMuiTheme, makeStyles, ThemeProvider, useTheme } from '@material-ui/core/styles'
import { muiTheme } from '../theming/muiTheme'
import { CssBaseline, Container, Drawer, List, ListItem, ListItemText, Toolbar, SwipeableDrawer, Hidden } from "@material-ui/core"
import { ContentfulBlogPostSysFilterInput } from "../../types/graphql-types"
import { DrawerProvider } from "../components/Drawer/DrawerProvider"
import DrawerContext from "../components/Drawer/DrawerContext"

interface iComponent extends iHeaderHelmet {
}

const BoddyLayout = styled(Container)`
  display: flex;
  .MuiDrawer-root {
    margin-right: 20px;
    .MuiPaper-root {
      position: relative;
    }
  }
`

const useStyles = makeStyles((theme) => ({
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: '240px',
      flexShrink: 0,
    },
  },
  drawerPaper: {
    width: '240px',
  }
}));

export const PageWrapper: React.FC<iComponent> = props => {
  const { pageTitle, description, children } = props
  const classes = useStyles();
  const drawerContext = React.useContext(DrawerContext)
  console.log(42, drawerContext.isOpen, drawerContext.setClose, drawerContext.setOpen)

  const onDrawerOpen = React.useCallback(
    (event: React.SyntheticEvent) => {
      console.log(45)
      drawerContext.setOpen()
    },
    [drawerContext.isOpen, drawerContext.setClose, drawerContext.setOpen]
  )

  const onDrawerClose = React.useCallback(
    (event: React.SyntheticEvent) => {
      console.log(52, drawerContext.setClose)
      drawerContext.setClose()
    },
    [drawerContext.isOpen, drawerContext.setClose, drawerContext.setOpen]
  )

  const InnerDrawer = () => {
    return (
      <React.Fragment>
        <Toolbar />
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
          <Header position="fixed" />
          <SwipeableDrawer
              anchor='left'
              open={drawerContext.isOpen}
              onClose={onDrawerClose}
              onOpen={onDrawerOpen}
            >
              {InnerDrawer()}
            </SwipeableDrawer>
          <BoddyLayout>
            <Hidden smDown={true}>
              {/* side-menu */}
              <div>
                {InnerDrawer()}
              </div>
            </Hidden>
            <main>
              <React.Fragment>
                <Toolbar/>
                {children}
              </React.Fragment>
            </main>
          </BoddyLayout>
      </ThemeProvider>
    </SiteMetaDataProvider>
  )
}
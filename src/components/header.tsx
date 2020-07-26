import * as React from "react"
import { Link, StaticQuery, graphql } from "gatsby"
import styled from "styled-components"
import { invert } from 'polished'
import SiteMetaDataContext from "./SiteMetaData/SiteMetaDataContext"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, makeStyles } from "@material-ui/core"
import DrawerContext from "./Drawer/DrawerContext"

interface iHeader {
  position: 'static' | 'fixed'
}

const StyledAppBar = styled(AppBar)`
  .MuiContainer-root{
    .MuiToolbar-gutters {
      padding-left: 0;
      adding-right: 0;
    }
  }
`

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  }
}))

export const Header: React.FC<iHeader> = props => {
  const data = React.useContext(SiteMetaDataContext)
  const title = data.site?.siteMetadata?.title || '???'
  const {position} = props
  const classes = useStyles()
  const drawerContext = React.useContext(DrawerContext)

  const menuIconClickHandler = React.useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      console.log(44, drawerContext.isOpen, drawerContext.setClose, drawerContext.setOpen)
      drawerContext.isOpen ? drawerContext.setClose() : drawerContext.setOpen()
    },
    [drawerContext.isOpen, drawerContext.setClose, drawerContext.setOpen]
  )

  return(
  <StyledAppBar position={position} className={classes.appBar}>
    <Container>
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu"
          onClick={menuIconClickHandler}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Container>
  </StyledAppBar>
  )
}
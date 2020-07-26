import * as React from "react"
import styled from "styled-components"
import { invert } from 'polished'
import SiteMetaDataContext from "./SiteMetaData/SiteMetaDataContext"

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Container, makeStyles, Hidden } from "@material-ui/core" 

interface iHeader {
  position: 'static' | 'fixed'
  menuIconHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const StyledAppBar = styled(AppBar)`
  .MuiContainer-root{
    .MuiToolbar-gutters {
      padding-left: 0;
      adding-right: 0;
    }
  }
`

export const Header: React.FC<iHeader> = props => {
  const data = React.useContext(SiteMetaDataContext)
  const title = data.site?.siteMetadata?.title || '???'
  const {position} = props

  return(
  <StyledAppBar position={position}>
    <Container>
      <Toolbar>
        <Hidden mdUp>
          <IconButton edge="start" color="inherit" aria-label="menu"
            onClick={props.menuIconHandler}
          >
            <MenuIcon />
          </IconButton>
        </Hidden>
        <Typography variant="h6">
          {title}
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </Container>
  </StyledAppBar>
  )
}
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
import { AlgoliaSearch } from "./search/AlgoliaSearch";

interface iHeader {
  position: 'static' | 'fixed'
  menuIconHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Spacer = styled.div``

const HeaderContainer = styled(Container)``
const HeaderToolbar = styled(Toolbar)``

const StyledAppBar = styled(AppBar)`
  ${HeaderContainer} {
    padding-left: 0;
    padding-right: 0;
    ${HeaderToolbar} {
      ${Spacer} {
        flex-grow: 1;
        flex-shrink: 1;
      }
    }
  }
`

export const Header: React.FC<iHeader> = props => {
  const data = React.useContext(SiteMetaDataContext)
  const title = data.site?.siteMetadata?.title || '???'
  const {position} = props

  return(
  <StyledAppBar position={position}>
    <HeaderContainer>
      <HeaderToolbar>
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
        <Spacer />
        <AlgoliaSearch />
      </HeaderToolbar>
    </HeaderContainer>
  </StyledAppBar>
  )
}
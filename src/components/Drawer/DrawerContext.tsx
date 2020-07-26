import React from "react"

const defaultContext = {
  isOpen: false,
  setClose: () => { alert('setClose') },
  setOpen: () => { alert('setOpen') }
}

const DrawerContext = React.createContext(defaultContext)

export default DrawerContext
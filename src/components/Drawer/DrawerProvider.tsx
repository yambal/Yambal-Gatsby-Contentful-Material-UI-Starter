import React from "react"
import DrawerContext from "./DrawerContext"

export const DrawerProvider: React.FC = (props) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const setOpen = React.useCallback(
    () => {
      console.log(9)
      setIsOpen(true)
    },
    [isOpen]
  )

  const setClose = React.useCallback(
    () => {
      console.log(17)
      setIsOpen(false)
    },
    [isOpen]
  )

  React.useEffect(
    () => {
      console.log(24)
    },
    []
  )

  return (
    <div>
    <DrawerContext.Provider
      value={{
        isOpen: isOpen,
        setOpen,
        setClose
      }}
    >
      {props.children}
    </DrawerContext.Provider>
    </div>
  )
}

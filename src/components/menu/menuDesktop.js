import React from "react"
import { useTheme } from "@mui/material/styles"
import { Box, } from "@mui/material"

import ButtonMenu from "@components/buttonMenu/buttonMenu.js"

// Composant principal du header
const MenuDesktop = ({ links, color, colorText }) => {
  const theme = useTheme()

  return (
    <>
      <Box sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: "1rem"
      }}>
        {/* Première colonne avec les 2 liens */}
        {links.slice(0, 2).map((link, index) => (
          <ButtonMenu
            key={index}
            to={link.to}
            colorText={colorText}
            theme={theme}
          >
            {link.name}
          </ButtonMenu>
        ))}
      </Box>
      {links.slice(2).map((link, index) => (
        <ButtonMenu
          key={index}
          to={link.to}
          colorText={colorText}
          theme={theme}
        >
          {link.name}
        </ButtonMenu>
      ))}
    </>

  )
}

export default MenuDesktop

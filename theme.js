import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    light: "#EDEAE4",
    dark: "#111010",
  },
  typography: {
    fontFamily: "Cinzel Variable, sans-serif", // Police par défaut
  },
})

theme = responsiveFontSizes(theme)

export default theme

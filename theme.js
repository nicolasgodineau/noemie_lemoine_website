import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    primary: {
      main: '#EDEAE4',
    },
    secondary: {
      main: '#111010',
    },
    light: {
      main: '#EDEAE4', // Assure-toi que la couleur est correctement définie ici
    },
    dark: {
      main: "#111010",
    },
  },
  typography: {
    fontFamily: "Cinzel Variable, sans-serif", // Police par défaut
  },
})

theme = responsiveFontSizes(theme)

export default theme

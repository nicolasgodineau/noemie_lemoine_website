import { createTheme, responsiveFontSizes } from "@mui/material/styles"

let theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#EDEAE4', // couleur clair
    },
    secondary: {
      main: '#111010', // couleur foncé
    },
    text: {
      primary: '#EDEAE4',
      secondary: '#111010',
    },
  },
  typography: {
    fontFamily: "Cinzel Variable, sans-serif", // Police par défaut
  },
})

theme = responsiveFontSizes(theme)

export default theme

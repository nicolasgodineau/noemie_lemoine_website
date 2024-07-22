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
    colorDark: '#111010',
    colorLight: '#EDEAE4',
  },
  typography: {
    fontFamily: "Cinzel Variable, sans-serif", // Police par défaut
  },
  button: {
    fontFamily: "Gowun Batang",
    textTransform: "none",
    letterSpacing: "1.6px",
    fontSize: "1rem",
    cursor: "pointer",
  },
  breakpoints: {
    values: {
      xxs: 0,       // Extra-small devices
      xs: 480,    // Small extra device
      sm: 600,     // Small devices
      sm2: 640,    // Small devices (alternative)
      md: 768,     // Medium devices
      md2: 960,    // Medium devices (alternative)
      lg: 1024,    // Large devices
      xl: 1280,    // Extra-large devices
      xxl: 1536,   // Extra-extra-large devices
      xxxl: 1920,   // Very large devices (beyond xl)
    },
  },
})


theme = responsiveFontSizes(theme)

export default theme
/* 
Breackpoints MUI
      xs: 0,    // Extra-small devices (portrait phones, less than 600px)
      sm: 600,  // Small devices (landscape phones, 600px and up)
      md: 960,  // Medium devices (tablets, 960px and up)
      lg: 1280, // Large devices (desktops, 1280px and up)
      xl: 1920, // Extra-large devices (large desktops, 1920px and up)

Breackpoints Taillwind
      'xs': '480px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',

*/
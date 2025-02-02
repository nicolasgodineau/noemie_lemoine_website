// src/components/layout.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";
import { Container } from "@mui/material";
import theme from "../../theme.js";
import Header from "@components/header/header.js";
import BackToTop from '../components/backToTop/backToTop';
import Footer from "@components/footer/footer.js";

const GlobalStyle = createGlobalStyle`
  :root {
    --color-light: "#EDEAE4";
    --secondary-dark: "#a5a39f";
  }
  * {
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
  }
  body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    background-color: ${(props) => props.backgroundColor || "#EDEAE4"}; // couleur par défaut (colorLight)
  }
  #gatsby-focus-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
.input-label {
  color: var(--color-light);
}

.input-label-focused {
  color: var(--secondary-dark);
}

.input-field {
  color: var(--color-light);
}
`;

const Layout = ({ children, headerColor, headerColorText, backgroundColor }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Header color={headerColor} colorText={headerColorText} />
      <Container
        component="main"
        maxWidth={false}
        disableGutters
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        {children}
      </Container>
      <BackToTop />
    </ThemeProvider>
  );
};

export default Layout;

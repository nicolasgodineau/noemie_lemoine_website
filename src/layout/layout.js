// src/components/layout.js
import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";
import { Container } from "@mui/material";
import theme from "../../theme.js";
import Header from "@components/header/header.js";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }
  html {
    box-sizing: border-box;
  }
  body {
    minHeight: 100vh;
    display: flex;
    flexDirection: column;
    background-color: ${(props) => props.backgroundColor || "#EDEAE4"}; // couleur par défaut (colorLight)
  }
`;

const Layout = ({ children, headerColor, headerColorText, backgroundColor }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle backgroundColor={backgroundColor} />
      <Header color={headerColor} colorText={headerColorText} />
      <Container component="main" maxWidth={false} disableGutters>
        {children}
      </Container>
      <footer>
        © {new Date().getFullYear()} &middot; Noëmie Lemoine
      </footer>
    </ThemeProvider>
  );
};

export default Layout;

import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { createGlobalStyle } from "styled-components";

import { Container } from "@mui/material";
import theme from "../../../theme.js";
import Header from "../header/header.js";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

  }
  html {
    box-sizing: border-box;
  }
`;

const Layout = ({ children, headerColor, headerColorText }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Container component="main" maxWidth={false} disableGutters>
        {children}
      </Container>

      {/* <footer>
          © {new Date().getFullYear()} &middot; Noëmie Lemoine
          {` `}
        </footer> */}

    </ThemeProvider>
  );
};

export default Layout;

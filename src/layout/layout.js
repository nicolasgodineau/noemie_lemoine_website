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
    /* outline: 1px solid red; */
  }
  html {
    box-sizing: border-box;
  }
`;

const Layout = ({ children, headerColor, headerColorText }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header color={headerColor} colorText={headerColorText} />
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

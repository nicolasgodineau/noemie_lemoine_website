import React from "react";
import { ThemeProvider } from "@mui/material/styles";
import { Container } from "@mui/material";
import theme from "../../../theme.js";

const PortfolioLayout = ({ children, bgColor }) => {
    return (
        <ThemeProvider theme={theme}>
            <Container component="aside"
                maxWidth={false}
                disableGutters
                sx={{
                    backgroundColor: bgColor,
                }}>

                {children}
            </Container>

        </ThemeProvider>
    );
};

export default PortfolioLayout;

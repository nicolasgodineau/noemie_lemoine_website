import React from "react"


import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

function Portfolio4Page() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100svh",
                display: "flex",
                justifyContent: "space-between",
                backgroundColor: colorLight,
            }}>
            <Box sx={{
                margin: "auto"
            }}>
                <StaticImage
                    src="../images/portfolio/img_portfolio_7.webp"
                    alt="image d'illustration"
                    style={{
                        width: "420px",
                        height: "570px",
                        display: "flex",
                        flexDirection: "column",
                        borderRadius: "0px 200px 0px 0px",
                    }}
                />
            </Box>
            <StaticImage
                src="../images/portfolio/img_portfolio_8.webp"
                alt="image d'illustration"
                width={520}
                style={{
                    width: "auto",
                    maxWidth: "520px",
                    maxHeight: "100vh",
                    height: "100vh",
                    borderRadius: "0px 0px 0px 350px",
                }}
            />

        </Container>
    )
}

export default Portfolio4Page
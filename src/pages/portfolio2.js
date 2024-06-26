import React from "react"


import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio2Page() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;

    return (
        <Container
            maxWidth={false}
            sx={{
                height: "100svh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colorDark,
            }}>
            <Container
                maxWidth="lg"
                disableGutters
                sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: "2vmin"
                }}
            >
                <StaticImage
                    src="../images/portfolio/img_portfolio_3.webp"
                    alt="image d'illustration"
                    objectFit="contain"
                    style={{
                        width: "33%",
                        height: "463px",
                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_5.webp"
                    alt="image d'illustration"
                    style={{
                        width: "auto",
                        maxWidth: "33%",
                        height: "100vh",
                        maxHeight: "800px",
                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_4.webp"
                    alt="image d'illustration"
                    objectFit="contain"
                    style={{
                        width: "33%",
                        height: "463px",
                    }}
                />
            </Container>
        </Container>
    )
}

export default Portfolio2Page
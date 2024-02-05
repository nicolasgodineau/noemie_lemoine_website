import React from "react"


import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio2Page() {
    const theme = useTheme()
    return (
        <Container maxWidth={false}
            sx={{
                height: "100svh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.secondary.main,
            }}>
            <Container
                maxWidth="lg"
                disableGutters
                sx={{

                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <StaticImage
                    src="../images/portfolio/img_portfolio_3.webp"
                    alt="image d'illustration"
                    style={{
                        width: "270px",
                        height: "463px",
                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_5.webp"
                    alt="image d'illustration"
                    style={{
                        width: "auto",
                        maxWidth: "340px",
                        height: "100vh",
                        maxHeight: "800px",
                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_4.webp"
                    alt="image d'illustration"
                    style={{
                        width: "270px",
                        height: "463px",
                    }}
                />
            </Container>
        </Container>
    )
}

export default Portfolio2Page
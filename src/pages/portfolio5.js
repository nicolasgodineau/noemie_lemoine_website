import React from "react"

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio5Page() {
    const theme = useTheme()
    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
                height: "100svh",
                display: "flex",
                gap: "5rem",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: theme.palette.secondary.main,
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_10.webp"
                alt="image d'illustration"
                style={{
                    height: "100vh",
                    width: "auto"
                }}
            />
            <StaticImage
                src="../images/portfolio/img_portfolio_9.webp"
                alt="image d'illustration"
                style={{
                    width: "430px",
                    height: "600px"
                }}
            />
        </Container>
    )
}

export default Portfolio5Page
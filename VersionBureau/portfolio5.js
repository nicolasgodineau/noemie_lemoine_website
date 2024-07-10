import React from "react"

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio5Page() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;

    return (
        <Container
            maxWidth={false}
            sx={{
                height: "100svh",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                backgroundColor: colorDark,
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_10.webp"
                alt="image d'illustration"
                objectFit="contain"
                style={{
                    height: "100%",
                    maxHeight: "1000px",
                    width: "auto"
                }}
            />
            <StaticImage
                src="../images/portfolio/img_portfolio_9.webp"
                alt="image d'illustration"
                objectFit="contain"
                style={{
                    width: "33%",
                }}
            />
        </Container>
    )
}

export default Portfolio5Page
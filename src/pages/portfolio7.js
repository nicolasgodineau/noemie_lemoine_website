import React from "react"

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio7Page() {
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
                gap: "5rem",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "black",
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_13.webp"
                alt="image d'illustration"
                width={500}
                height={750}
                objectFit="contain"
            />
        </Container>
    )
}

export default Portfolio7Page
import React from "react"


import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

function Portfolio4Page() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { primary: { main: colorLight } } = theme.palette;

    return (
        <Container
            maxWidth="lg"
            sx={{
                height: "100svh",
                display: "flex",
                justifyContent: "end",
                backgroundColor: colorLight,
            }}>
            <StaticImage
                src="../images/portfolio/Group3.png"
                alt="image d'illustration"
                objectFit="contain"
            />
        </Container>
    )
}

export default Portfolio4Page
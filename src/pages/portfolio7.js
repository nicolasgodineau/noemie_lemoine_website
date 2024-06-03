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
            <StaticImage
                src="../images/portfolio/IMG_0760.jpg"
                alt="image d'illustration"
                objectFit="contain"
                style={{
                    width: "auto",
                    maxWidth: "50%",
                    height: "100vh",
                    maxHeight: "800px",
                }}
            />
        </Container>
    )
}

export default Portfolio2Page
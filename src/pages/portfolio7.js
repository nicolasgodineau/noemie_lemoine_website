import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Container } from "@mui/material"

function Portfolio7Page() {
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
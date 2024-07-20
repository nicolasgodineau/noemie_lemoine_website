import React from "react"


import { StaticImage } from "gatsby-plugin-image"
import { Container, } from '@mui/material';

function Portfolio7Section({ color }) {

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                backgroundColor: color,
            }}>
            <StaticImage
                src="../images/portfolio/img_portfolio_13.webp"
                alt="image d'illustration"
                objectFit="cover"
            />
        </Container>
    )
}

export default Portfolio7Section

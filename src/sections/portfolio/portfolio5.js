import React from "react"

import { StaticImage } from "gatsby-plugin-image"
import { Container } from '@mui/material';

function Portfolio5Section({ color }) {

    return (
        <Container
            maxWidth={false}
            disableGutters
            sx={{
/*                 height: "100svh",
 */                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: color,
                paddingBottom: "2rem"
            }}>
            <StaticImage
                src="../../images/portfolio/Group6.png"
                alt="image d'illustration"
                objectFit="cover"
            />
        </Container>
    )
}

export default Portfolio5Section

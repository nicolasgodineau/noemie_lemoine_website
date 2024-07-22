import React from "react"

import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Container } from '@mui/material';

function Portfolio7Section() {

    const theme = useTheme()

    return (
        <Container component="section"
            maxWidth={false}
            disableGutters
            sx={{
                backgroundColor: theme.palette.colorDark,
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                }
            }}>
            <StaticImage
                src="../../images/portfolio/img_portfolio_13.webp"
                alt="image d'illustration"
                objectFit="contain"
                style={{
                    width: '100%',
                    height: '100%',
                }}
            />



        </Container>
    )
}

export default Portfolio7Section

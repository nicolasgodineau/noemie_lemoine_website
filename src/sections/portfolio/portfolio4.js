import React from "react"

import { useTheme } from "@mui/material/styles";
import { StaticImage } from "gatsby-plugin-image"
import { Box, Container } from '@mui/material';

function Portfolio4Section({ color }) {

    const theme = useTheme()
    const isLgUp = (theme.breakpoints.up('md'));

    return (
        <Container component="section"
            maxWidth={false}
            sx={{
                backgroundColor: color,
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                    display: "flex",
                }
            }}>
            <Container
                maxWidth={isLgUp ? "xl" : "xl"}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "space-around",
                    gap: "3rem",
                    marginY: "1rem",
                    [theme.breakpoints.up('lg')]: {
                        width: '100%',
                        flexDirection: "row",
                        justifyContent: "flex-end",
                    }
                }}>
                <Box sx={{ /* width: '50%', height: '75%', alignSelf: "end" */alignSelf: "end" }}>
                    <StaticImage
                        src="../../images/portfolio/IMG_4744 copie 1.png"
                        alt="Image de gauche"
                        objectFit="none"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: "0% 0% 0% 400px",
                        }}
                    />
                </Box>
                <Box sx={{ width: '60vmin', height: '90%', alignSelf: "end" }}>
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_7.webp"
                        alt="Image de droite"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            borderRadius: "0% 400px 0% 0%",
                        }}
                    />
                </Box>




                {/* 
                <Box
                    sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 2,
                        boxShadow: 3,
                    }}
                >
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_7.webp"
                        alt="Description de l'image"
                        layout="constrained"
                        placeholder="blurred"
                        style={{ width: '100%', height: 'auto' }}
                    />
                </Box>
                <Box
                    sx={{
                        width: "100%",
                        [theme.breakpoints.up('lg')]: {
                            width: "40%",
                            alignSelf: "end"
                        }
                    }}>
                    <StaticImage
                        src="../../images/portfolio/img_portfolio_8.webp"
                        alt="image d'illustration"
                        style={{
                            height: "85%",
                            borderRadius: "0% 0% 0% 400px",
                        }}
                    />
                </Box> */}
            </Container>

        </Container>
    )
}

export default Portfolio4Section

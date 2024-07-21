import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"

function Portfolio5Section({ color }) {

    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));

    return (
        <Container component="section"
            maxWidth={false}
            disableGutters
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                backgroundColor: color,
                paddingBottom: "2rem",
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                }
            }}>
            {isMobile ? (
                // Code to render if isMobile is true (version bureau)
                <Container
                    maxWidth="xl"
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "space-around",
                        gap: "3rem",
                        marginY: "1rem",
                        [theme.breakpoints.up('lg')]: {
                            height: '100%',
                            width: '100%',
                            flexDirection: "row",
                            justifyContent: "flex-end",
                        }
                    }}>
                    <Box
                        sx={{
                            height: '100%',
                            display: "flex",
                            flexDirection: "row",
                        }}>
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_9.webp"
                            alt="Image de gauche"
                            objectFit="contain"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            height: '70%',
                            display: "flex",
                            flexDirection: "row",
                        }}>
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_10.webp"
                            alt="Image de gauche"
                            objectFit="cover"
                            style={{
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    </Box>
                </Container>
            ) : (
                // Code to render if isMobile is false (version mobile)
                <StaticImage
                    src="../../images/portfolio/Group6.png"
                    alt="image d'illustration"
                    objectFit="cover"
                />
            )}


        </Container>
    )
}

export default Portfolio5Section

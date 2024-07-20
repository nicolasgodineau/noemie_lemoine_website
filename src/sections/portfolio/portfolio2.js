import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

function Portfolio2Section({ color }) {
    const theme = useTheme()

    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <Container component="section"
            maxWidth={false}
            sx={{
                backgroundColor: color,
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    display: "flex",
                }
            }}>
            {isMdUp ? (
                <Container
                    maxWidth="lg"
                    sx={{
                        /* height: "100svh", */
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: "2vmin"
                    }}>
                    <Box
                        sx={{
                            width: "33%",
                        }}
                    >
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_3.webp"
                            alt="image d'illustration 2"
                            objectFit="cover"
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "33%",
                        }}
                    >
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_5.webp"
                            alt="image d'illustration 2"
                            objectFit="cover"
                            style={{
                                height: "100vh",
                                maxHeight: "800px",
                            }}
                        />
                    </Box>
                    <Box
                        sx={{
                            width: "33%",

                        }}
                    >
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_4.webp"
                            alt="image d'illustration 2"
                            objectFit="cover"
                        />
                    </Box>
                </Container>
            ) : (
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "row",
                        flexWrap: "nowrap",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <StaticImage
                        src="../../images/portfolio/Portfolio 2 V. Tel.png"
                        alt="image d'illustration"
                        objectFit="cover"
                        imgStyle={{
                            borderRadius: "0px 0px 0px 200px",
                        }}
                    />
                </Box>
            )}

        </Container>
    )
}

export default Portfolio2Section

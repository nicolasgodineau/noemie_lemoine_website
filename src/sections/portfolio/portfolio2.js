import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

function Portfolio2Section() {
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));


    return (
        <Container component="section"
            maxWidth={false}
            disableGutters={isMobile ? "false" : "true"}
            sx={{
                backgroundColor: theme.palette.colorDark,
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    display: "flex",
                }
            }}>
            {isMobile ? /* Version bureau */
                (
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
                                quality={100}
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
                                quality={100}
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
                                quality={100}
                            />
                        </Box>
                    </Container>
                ) : /* Version mobile */
                (
                    <Container
                        disableGutters
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            justifyContent: "center",
                            alignItems: "center",
                            position: "relative",

                        }}
                    >
                        <StaticImage
                            src="../../images/portfolio/img_portfolio_5.webp"
                            alt="image d'illustration"
                            objectFit="cover"
                            quality={100}
                            style={{ marginBottom: "40%" }}
                        />
                        <Box
                            sx={{
                                position: "absolute",
                                bottom: "0",
                                height: "50%",
                                width: "100%",
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "nowrap",
                                justifyContent: "space-around",
                                alignItems: "center",
                                zIndex: "100"
                            }}
                        >
                            <StaticImage
                                src="../../images/portfolio/img_portfolio_4.webp"
                                alt="image d'illustration"
                                objectFit="contain"
                                quality={100}
                                style={{ width: "40%", height: "80%", alignSelf: "flex-start" }}
                            />
                            <StaticImage
                                src="../../images/portfolio/img_portfolio_3.webp"
                                alt="image d'illustration"
                                objectFit="contain"
                                quality={100}
                                style={{ width: "40%", height: "80%", alignSelf: "flex-end" }}
                            />
                        </Box>
                    </Container>
                )}

        </Container>
    )
}

export default Portfolio2Section

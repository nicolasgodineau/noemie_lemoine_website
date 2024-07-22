import React from "react"

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Container, Box } from '@mui/material';
import { StaticImage } from "gatsby-plugin-image"

function Portfolio5Section() {

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
                backgroundColor: theme.palette.colorDark,
                paddingBottom: "2rem",
                overflow: "hidden",
                [theme.breakpoints.up('lg')]: {
                    height: "100svh",
                    width: '100%',
                }
            }}>
            {isMobile ? /* Version bureau */
                (
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
                            src="../../images/portfolio/img_portfolio_10.webp"
                            alt="image d'illustration"
                            objectFit="cover"
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
                                justifyContent: "flex-end",
                                alignItems: "center",
                                marginRight: "4rem",
                                zIndex: "100"
                            }}
                        >
                            <StaticImage
                                src="../../images/portfolio/img_portfolio_9.webp"
                                alt="image d'illustration"
                                objectFit="contain"
                                style={{ width: "50%", alignSelf: "flex-end" }}
                            />
                        </Box>
                    </Container>

                )}


        </Container>
    )
}

export default Portfolio5Section

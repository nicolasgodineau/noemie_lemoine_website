import React from "react"

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import Typography from "@mui/material/Typography"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import AllData from "../languages/fr.json"

function PortfolioTestPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const portfolioData = AllData.portfolio

    const portfolio3Data = AllData.portfolio3
    const portfolio6Data = AllData.portfolio6

    return (
        <>
            {/* section1  */}
            <Container
                component="section"
                id="section1"
                className="light"
                maxWidth={false}
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        maxWidth: "xl",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-end",
                        gap: "4rem",
                    }}
                >
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Bodoni Moda Variable",
                            letterSpacing: "1.6px",
                            alignSelf: "end",
                            flexGrow: 1,
                        }}
                    >
                        {t("portfolio.title")}
                    </Typography>
                    <StaticImage
                        src="../images/portfolio/img_portfolio_1.webp"
                        alt="image d'illustration"
                        style={{
                            maxWidth: "425px",
                            height: "577px",
                            borderRadius: "0px 0px 0px 200px",
                        }}
                    />
                    <StaticImage
                        src="../images/portfolio/img_portfolio_2.webp"
                        alt="image d'illustration"
                        style={{
                            maxWidth: "323px ",
                            height: "450px",
                            borderRadius: "0px 200px 0px 0px",
                        }}
                    />
                </Container>
                <Container
                    maxWidth="lg"
                    disableGutters
                    sx={{
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        marginTop: "2rem",
                    }}
                >
                    {portfolioData.paragraph1.map((paragraph, pIndex) => (
                        <Typography
                            key={pIndex}
                            paragraph
                            sx={{
                                maxWidth: "unset",
                                marginBottom: 0,
                                fontFamily: "Gowun Batang",
                                textTransform: "none",
                            }}
                        >
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                    {portfolioData.paragraph2.map((paragraph, pIndex) => (
                        <Typography
                            key={pIndex}
                            paragraph
                            sx={{
                                maxWidth: "unset",
                                marginTop: "2rem",
                                fontFamily: "Gowun Batang",
                                textTransform: "none",
                            }}
                        >
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                </Container>
            </Container>
            {/* section2  */}
            <Container
                component="section"
                id="section2"
                className="dark"
                maxWidth={false}
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.secondary.main,
                }}
            >
                <Container
                    maxWidth="xl"
                    disableGutters
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "1rem",
                    }}
                >
                    <StaticImage
                        src="../images/portfolio/img_portfolio_3.webp"
                        alt="image d'illustration"
                        style={{
                            width: "auto",
                            maxWidth: "270px",
                            minHeight: "50svh",
                        }}
                    />
                    <StaticImage
                        src="../images/portfolio/img_portfolio_5.webp"
                        alt="image d'illustration"
                        /* width={340} */
                        style={{
                            width: "auto",
                            maxWidth: "340px",
                            minHeight: "100svh",
                        }}
                    />
                    <StaticImage
                        src="../images/portfolio/img_portfolio_4.webp"
                        alt="image d'illustration"
                        style={{
                            width: "auto",
                            maxWidth: "270px",
                            minHeight: "50svh",
                        }}
                    />
                </Container>
            </Container>
            {/* section3  */}
            <Container
                component="section"
                maxWidth={false}
                disableGutters
                sx={{
                    height: "100dvh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Container
                    maxWidth="xl"
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <StaticImage
                        src="../images/portfolio/img_portfolio_6.webp"
                        alt="image d'illustration"
                        style={{
                            width: "auto",
                            maxWidth: "700px",
                            height: "100dvh",
                            borderRadius: "0px 0px 350px 0px",
                        }}
                    />

                    <Container
                        maxWidth="xs"

                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignSelf: "flex-end",
                            marginBottom: "10vmin",
                        }}
                    >
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Bodoni Moda Variable",
                                letterSpacing: "3px",
                                alignSelf: "end",
                                flexGrow: 1,
                            }}
                        >
                            {t("portfolio3.title")}
                        </Typography>
                        {portfolio3Data.paragraph1.map((paragraph, pIndex) => (
                            <Typography
                                key={pIndex}
                                paragraph
                                variant="h6"
                                sx={{
                                    maxWidth: "unset",
                                    marginTop: "2rem",
                                    fontFamily: "Simonetta",
                                    textTransform: "none",
                                    letterSpacing: "2px",
                                    textAlign: "end",
                                }}
                            >
                                {t(paragraph.line)}
                            </Typography>
                        ))}
                    </Container>
                </Container>
            </Container>
            {/* section4  */}
            <Container
                component="section"
                maxWidth={false}
                disableGutters
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.primary.main,
                }}
            >
                <Container
                    maxWidth="xl"
                    disableGutters
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            marginBottom: "10vmin",
                        }}
                    >
                        <StaticImage
                            src="../images/portfolio/img_portfolio_7.webp"
                            alt="image d'illustration"
                            style={{
                                alignSelf: "center",
                                justifySelf: "center",
                                maxWidth: "420px",
                                maxHeight: "570px",
                                display: "flex",
                                flexDirection: "column",
                                borderRadius: "0px 200px 0px 0px",
                            }}
                        />
                    </Box>
                    <StaticImage
                        src="../images/portfolio/img_portfolio_8.webp"
                        alt="image d'illustration"
                        style={{
                            width: "100%",
                            maxWidth: "530px",
                            height: "100dvh",
                            borderRadius: "0px 0px 0px 350px",
                        }}
                    />
                </Container>
            </Container>
            {/* section5  */}
            <Container
                component="section"
                maxWidth={false}
                disableGutters
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    gap: "5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: theme.palette.secondary.main,
                }}
            >
                <StaticImage
                    src="../images/portfolio/img_portfolio_10.webp"
                    alt="image d'illustration"
                    style={{
                        height: "100dvh",
                        width: "auto",
                        maxWidth: "560px",

                    }}
                />
                <StaticImage
                    src="../images/portfolio/img_portfolio_9.webp"
                    alt="image d'illustration"
                    style={{
                        width: "auto",
                        maxWidth: "430px",
                        maxHeight: "600px"
                    }}
                />
            </Container>
            {/* section6  */}
            <Container
                component="section"
                maxWidth={false}
                disableGutters
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    justifyContent: "space-between",
                    backgroundColor: theme.palette.primary.main,
                }}>
                <Container
                    maxWidth="xl"
                    disableGutters
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignSelf: "flex-end",
                        marginBottom: "3vmin",
                        paddingX: "3rem",
                        zIndex: "100"
                    }}>
                    <Box sx={{
                        maxWidth: "260px",
                    }}>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Bodoni Moda Variable",
                                letterSpacing: "3px",
                            }}
                        >
                            {t("portfolio6.title1")}
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                fontFamily: "Bodoni Moda Variable",
                                letterSpacing: "3px",
                                textAlign: "end"
                            }}
                        >
                            {t("portfolio6.title2")}
                        </Typography>
                    </Box>
                    {portfolio6Data.paragraph1.map((paragraph, pIndex) => (
                        <Typography key={pIndex} paragraph variant="h6" sx={{
                            marginTop: "2rem",
                            fontFamily: "Simonetta",
                            textTransform: "none",
                            letterSpacing: "2px",
                        }}>
                            {t(paragraph.line)}
                        </Typography>
                    ))}
                </Container>
                <Box sx={{
                    position: "absolute",
                    right: "0",
                    display: "flex",
                    alignItems: "end",
                    height: "100%"
                }}>
                    <StaticImage
                        src="../images/portfolio/img_portfolio_11.webp"
                        alt="image d'illustration"
                        style={{
                            maxWidth: "400px",
                            maxHeight: "660px",
                            alignSelf: "start",
                            borderRadius: "0px 0px 0px 200px",
                        }}
                    />

                    <StaticImage
                        src="../images/portfolio/img_portfolio_12.webp"
                        alt="image d'illustration"
                        style={{
                            maxWidth: "470px",
                            maxHeight: "865px",
                            borderRadius: "0px 200px 0px 0px",
                        }}
                    />
                </Box>
            </Container>
            {/* section6  */}
            <Container
                component="section"
                maxWidth={false}
                disableGutters
                sx={{
                    minHeight: "100svh",
                    display: "flex",
                    gap: "5rem",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "black",
                }}>
                <StaticImage
                    src="../images/portfolio/img_portfolio_13.webp"
                    alt="image d'illustration"
                    objectFit="contain"
                    style={{
                        maxWidth: "500px",
                        minHeight: "750px",
                    }}
                />
            </Container>
        </>
    )
}

export default PortfolioTestPage

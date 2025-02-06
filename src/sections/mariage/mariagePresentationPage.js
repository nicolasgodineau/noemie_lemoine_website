import React from "react"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material';

import TypoElement from "../../components/typoElement.js";
import TypoElementTitle from "../../components/typoElementTitle.js";


import AllData from '@languages'


function MariagePresentationPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up("lg"))
    const isLgUp = (theme.breakpoints.up('md'));

    const mariageData = AllData.mariage


    return (
        <Container component="section"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                overflow: "hidden",
                paddingY: "2rem",
                paddingX: 0,
                [theme.breakpoints.up('lg')]: {
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                }
            }}>
            <Container
                maxWidth={isLgUp ? "xl" : false}
                sx={{
                    display: "flex",
                    flexDirection: "column-reverse",
                    alignItems: "center",
                    gap: "2rem",
                    [theme.breakpoints.up('lg')]: {
                        height: "calc(100svh - 96px)",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    }
                }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-evenly",
                        gap: "3rem",
                        textAlign: "end",
                        [theme.breakpoints.up('lg')]: {
                            justifyContent: "center",
                            textAlign: "start",
                            paddingY: "2rem",
                        }
                    }}>
                    <TypoElementTitle variant="h4" sx={{}}>
                        {t("mariage.title")}
                    </TypoElementTitle>
                    <Box sx={{
                        display: "flex",
                        flexDirection: "column",
                        [theme.breakpoints.up('lg')]: {
                            width: '65ch',
                            justifyContent: "space-evenly",
                            alignItems: "center",
                        }
                    }}>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                gap: "2rem",
                            }}>
                            <TypoElement variant="body1">
                                {t("mariage.paragraph")}
                            </TypoElement>
                            <TypoElement variant="body1">
                                {t("mariage.line")}
                            </TypoElement>
                            {mariageData.steps.map((step, index) => (
                                <Box key={index}>
                                    <TypoElement variant="h5">
                                        {step.title}
                                    </TypoElement>
                                    <TypoElement variant="body1">
                                        {step.line}
                                    </TypoElement>
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box
                    sx={{
                        maxWidth: `${theme.breakpoints.values.xs}px`,
                        maxHeight: "720px",
                        height: '100%',
                        width: '100%',
                    }}>
                    <StaticImage
                        src="../../images/mariage/img_mariage_1.webp"
                        alt="image d'illustration"
                        objectFit="cover"
                        style={{
                            height: "100%",
                            width: '100%',
                            borderRadius: isMobile ? '200px 0px 0px 0px' : '0px 0px 0px 250px',
                        }}
                    />
                </Box>
            </Container>
        </Container>
    )
}

export default MariagePresentationPage

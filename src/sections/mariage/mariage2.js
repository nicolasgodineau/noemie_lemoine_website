import React from "react"

import { useTheme } from "@mui/material/styles"
import useMediaQuery from "@mui/material/useMediaQuery"
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from "@mui/material"

import TypoElement from "@components//TypoElement.js"
import TypoElementTitle from "@components//TypoElementTitle.js"

import AllData from "@languages"

function Mariage2Page() {
    const { t } = useTranslation()
    const theme = useTheme()

    const isMobile = useMediaQuery(theme.breakpoints.up("lg"))
    const isLgUp = theme.breakpoints.up("md")

    const mariageData = AllData.mariage

    return (
        <Container
            component="section"
            maxWidth={false}
            sx={{
                backgroundColor: theme.palette.colorLight,
                color: theme.palette.colorDark,
                overflow: "hidden",
                paddingY: "2rem",
                [theme.breakpoints.up("lg")]: {
                    display: "flex",
                    alignItems: "center",
                },
            }}
        >
            <Container
                maxWidth={isLgUp ? "xl" : false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "2rem",
                    [theme.breakpoints.up("lg")]: {
                        height: "calc(100svh - 96px)",
                        flexDirection: "row",
                        justifyContent: "space-between",
                    },
                }}
            >
                <Box
                    sx={{
                        maxWidth: `${theme.breakpoints.values.sm}px`,
                        height: '100%',
                        width: '100%',
                    }}>
                    <StaticImage
                        src="../../images/mariage/img_mariage_3.webp"
                        alt="image d'illustration"
                        objectFit="cover"
                        style={{
                            height: "100%",
                            width: '100%',
                            borderRadius: isMobile ? '0px 0px 300px 0px' : '0px 0px 200px 0px',
                        }}
                    />
                </Box>
                <Box  /* zone texte */
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        [theme.breakpoints.up('lg')]: {
                            width: '100%',
                            justifyContent: "space-evenly",
                            alignItems: "center",
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
                            }
                        }}>
                        <TypoElementTitle variant="h4" sx={{}}>
                            {t("mariage.MakeupPackage.label")}
                        </TypoElementTitle>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "2rem",
                            }}
                        >
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                    {t("mariage.MakeupPackage.included")}
                                </TypoElement>
                                {mariageData.MakeupPackage.stepsIncluded.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                            <Box>
                                <TypoElement variant="h5" sx={{ marginBottom: "1rem" }}>
                                    {t("mariage.MakeupPackage.free")}
                                </TypoElement>
                                <TypoElement variant="h6">
                                    {t("mariage.MakeupPackage.titleFree")}
                                </TypoElement>
                                {mariageData.MakeupPackage.stepsFree.map((step, index) => (
                                    <TypoElement variant="body1" key={index}>
                                        {step.line}
                                    </TypoElement>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Container>
    )
}

export default Mariage2Page

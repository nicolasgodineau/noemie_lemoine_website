import React, { useEffect } from 'react';
import { useTheme } from "@mui/material/styles";
import { useTranslation } from "react-i18next"
import { StaticImage } from "gatsby-plugin-image"
import { Container, Box } from '@mui/material'

import ContactFormEmailJS from '@components/contactFormEmailJS/contactFormEmailJS';
import Layout from '@layouts/layout.js'

function ContactPage() {
    const { t } = useTranslation()
    const theme = useTheme()

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight} backgroundColor={theme.palette.colorDark}>
            <Container component="section"
                maxWidth={false}
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-between",
                    backgroundColor: theme.palette.colorDark,
                    color: theme.palette.colorLight,
                    overflow: "hidden",
                    [theme.breakpoints.up('lg')]: {
                        height: "calc(100svh - 96px)",
                        display: "flex",
                        alignItems: "center"
                    }
                }}>
                <Container
                    maxWidth="xl"
                    disableGutters
                    sx={{
                        height: "95%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column-reverse",
                        justifyContent: "center",
                        [theme.breakpoints.up('lg')]: {
                            flexDirection: "row",
                            gap: "2rem",
                            alignItems: "center",
                        }
                    }}>
                    <Box
                        autoComplete="off"
                        sx={{
                            height: "auto",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            flexGrow: 0,
                            [theme.breakpoints.up('lg')]: {
                                alignItems: "flex-start",
                                paddingY: "2rem",
                                paddingX: "8px"
                            }
                        }}>
                        <ContactFormEmailJS />
                    </Box>

                    <Box
                        sx={{
                            height: "40%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative",
                            [theme.breakpoints.up('lg')]: {
                                maxWidth: "50%",
                                height: "80%",
                            }
                        }}>
                        <Box
                            sx={{
                                position: "absolute",
                                width: "50%",
                                marginTop: "20%",
                                left: "0",
                                bottom: "3rem",
                                zIndex: "100"
                            }}
                        >
                            <StaticImage
                                src="../images/contact/img_contact_1.webp"
                                alt="image d'illustration"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "100px 0px 0px 0px",
                                }}
                            />
                        </Box>
                        <Box
                            sx={{
                                width: "70%",
                                height: "100%",
                                alignSelf: "flex-end",
                            }}
                        >
                            <StaticImage
                                src="../images/contact/img_contact_2.webp"
                                alt="image d'illustration"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "0px 100px 0px 0px",
                                }}
                            />
                        </Box>
                    </Box>
                </Container>
            </Container>
        </Layout>
    )
}

export default ContactPage
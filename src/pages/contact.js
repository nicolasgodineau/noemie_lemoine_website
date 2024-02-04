import React from 'react'

import { useTranslation } from "react-i18next"
import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"

import { Container, Button, TextField, Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';

export default function Contact() {
    const { t } = useTranslation()
    const theme = useTheme()
    console.log('theme:', theme)

    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour traiter le formulaire
    };

    return (
        <Layout>
            <Container maxWidth={false}
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#111010",
                    color: "#EDEAE4",
                }}>
                <Container maxWidth="lg"
                    disableGutters sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-around",
                        gap: "2rem"
                    }}>
                    <Box component="form" autoComplete="off" onSubmit={handleSubmit} sx={{
                        width: "30ch",
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                    }}>
                        <FormControl>
                            <TextField
                                label="Nom"
                                variant="standard"
                                fullWidth
                                color="light"
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Prénom"
                                variant="standard"
                                color="light"
                                sx={{
                                    "MuiInputLabel-root": {
                                        color: theme.palette.light.main,
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Email"
                                type="email"
                                variant="standard"
                                InputLabelProps={{ style: { color: theme.palette.light } }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Téléphone"
                                variant="standard"
                                color="warning"
                            />
                        </FormControl>
                        <Button
                            color="secondary"
                            sx={{
                                fontFamily: "Gowun Batang",
                                textTransform: "none",
                                letterSpacing: "1.6px",
                                fontSize: "1rem",
                                color: theme.palette.light,
                            }}
                        >
                            test
                        </Button>
                        <FormControl>
                            <TextField
                                label="Date de l'évènement"
                                type="date"
                                variant="standard"
                                sx={{
                                    color: "red",
                                }}

                            />
                        </FormControl>
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            variant="standard"
                            fullWidth
                            color="secondary"
                            sx={{
                                ".css-1mwhap2-MuiFormLabel-root-MuiInputLabel-root": {
                                    color: "#EDEAE4",
                                }
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary">
                            Envoyer
                        </Button>
                    </Box>
                    <Box sx={{
                        height: "100%", display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        position: "relative"
                    }}>
                        <StaticImage
                            src="../images/contact/img_contact_1.webp"
                            alt="image d'illustration"
                            style={{
                                position: "absolute",
                                width: "270px",
                                height: "360px",
                                borderRadius: "200px 0px 0px 0px",
                                marginTop: "20%",
                                left: "0",
                                zIndex: "100"
                            }}
                        />
                        <StaticImage
                            src="../images/contact/img_contact_2.webp"
                            alt="image d'illustration"
                            style={{
                                width: "427px",
                                height: "580px",
                                marginLeft: "200px",
                                borderRadius: "0px 200px 0px 0px",
                            }}
                        />
                    </Box>
                </Container>
            </Container>
        </Layout>
    )
}

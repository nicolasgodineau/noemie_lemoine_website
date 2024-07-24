import React from 'react'

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Button, TextField, Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';

import Layout from '@layouts/layout.js'

export default function Contact() {
    const theme = useTheme()

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight}>
            <Container component="section"
                maxWidth={false}
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    backgroundColor: theme.palette.colorDark,
                    color: theme.palette.colorLight,
                    overflow: "hidden",
                }}>
                <Container
                    maxWidth="xl"
                    sx={{
                        height: "90%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column-reverse",
                        justifyContent: "space-around",
                        gap: "2rem"
                    }}>
                    <Box component="form"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        sx={{
                            height: "auto",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                        }}>
                        <FormControl>
                            <TextField
                                label="Nom"
                                variant="standard"
                                fullWidth
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Prénom"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Email"
                                type="email"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Téléphone"
                                variant="standard"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                            />
                        </FormControl>
                        {/*                     <FormControl>
                        <TextField
                            label="Date de l'évènement"
                            type="date"
                            variant="standard"
                            format='DD-MM-YYYY'
                            InputLabelProps={{
                                shrink: true,
                                sx: {
                                    color: "#EDEAE4",
                                }
                            }}

                        />
                    </FormControl>
                    <FormControl components={['DateField']}>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <DatePicker
                                label="Date de l'évènement"
                                variant="standard"
                                size="medium"
                                format='DD-MM-YYYY'
                                slotProps={{
                                    textField: {
                                        variant: 'filled',
                                    },
                                    sx: {
                                        color: "#EDEAE4",
                                    }
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                    sx: {
                                        color: "#EDEAE4",
                                    }
                                }}
                            />
                        </LocalizationProvider>
                    </FormControl> */}
                        <TextField
                            label="Message"
                            multiline
                            rows={4}
                            variant="standard"
                            fullWidth
                            InputLabelProps={{
                                sx: {
                                    color: "#EDEAE4",
                                }
                            }}
                        />
                        <Button type="submit" variant="contained" color="primary" sx={{
                            backgroundColor: "#EDEAE4",
                            color: theme.palette.colorDark
                        }}>
                            Envoyer
                        </Button>
                    </Box>
                    <Box /* Zone image */
                        sx={{
                            height: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative"
                        }}>
                        <StaticImage /* Image gauche */
                            src="../images/contact/img_contact_1.webp"
                            alt="image d'illustration"
                            style={{
                                position: "absolute",
                                width: "50%",
                                height: "auto",
                                borderRadius: "100px 0px 0px 0px",
                                marginTop: "20%",
                                left: "0",
                                zIndex: "100"
                            }}
                        />
                        <StaticImage /* Image droite */
                            src="../images/contact/img_contact_2.webp"
                            alt="image d'illustration"
                            style={{
                                width: "70%",
                                height: "100%",
                                marginLeft: "200px",
                                borderRadius: "0px 100px 0px 0px",
                            }}
                        />
                    </Box>
                </Container>
            </Container>
        </Layout>
    )
}

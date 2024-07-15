import React from 'react'

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Button, TextField, Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';

import Layout from '../components/Layout/layout.js'

export default function Contact() {
    const theme = useTheme()
    // simplification des appels de couleurs
    const { secondary: { main: colorDark } } = theme.palette;
    const { primary: { main: colorLight } } = theme.palette;

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout headerColor={colorDark} headerColorText={colorLight}>
            <Container maxWidth={false}
                sx={{
                    height: "100svh",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#111010",
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
                                InputLabelProps={{
                                    sx: {
                                        color: colorLight,
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
                                        color: colorLight,
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
                                        color: colorLight,
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
                                        color: colorLight,
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
                            color: "#111010"
                        }}>
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

import React, { useEffect } from 'react';

import { useTheme } from "@mui/material/styles"
import { StaticImage } from "gatsby-plugin-image"

import { Container, Button, TextField, Box } from '@mui/material'

import FormControl from '@mui/material/FormControl';

import Layout from '@layouts/layout.js'

function ContactPage() {
    const theme = useTheme()

    useEffect(() => {
        // Force re-render or re-apply styles if needed
    }, [theme]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <Layout headerColor={theme.palette.colorDark} headerColorText={theme.palette.colorLight} backgroundColor={theme.palette.colorDark}>
            <Container component="section"
                maxWidth={false}
                sx={{
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
                    disableGutters
                    sx={{
                        height: "90%",
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column-reverse",
                        justifyContent: "space-around",
                        gap: "2rem",
                        [theme.breakpoints.up('lg')]: {
                            flexDirection: "row",

                            alignItems: "flex-end",
                        }
                    }}>
                    <Box component="form"
                        autoComplete="off"
                        onSubmit={handleSubmit}
                        sx={{
                            height: "auto",
                            width: "100%",
                            display: "flex",
                            flexDirection: "column",
                            [theme.breakpoints.up('lg')]: {
                                alignItems: "flex-start",
                                paddingY: "2rem",
                                paddingX: "8px"
                            }

                        }}>
                        <FormControl>
                            <TextField
                                label="Nom"
                                variant="standard"
                                color="primary"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                                sx={{
                                    input: {
                                        color: theme.palette.colorLight,
                                    },
                                    '.MuiInputLabel-root.Mui-focused': {
                                        color: theme.palette.secondary.dark
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Prénom"
                                variant="standard"
                                color="primary"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                                sx={{
                                    input: {
                                        color: theme.palette.colorLight,
                                    },
                                    '.MuiInputLabel-root.Mui-focused': {
                                        color: theme.palette.secondary.dark
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Email"
                                type="email"
                                variant="standard"
                                color="primary"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                                sx={{
                                    input: {
                                        color: theme.palette.colorLight,
                                    },
                                    '.MuiInputLabel-root.Mui-focused': {
                                        color: theme.palette.secondary.dark
                                    },
                                }}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                label="Téléphone"
                                variant="standard"
                                color="primary"
                                InputLabelProps={{
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }}
                                sx={{
                                    input: {
                                        color: theme.palette.colorLight,
                                    },
                                    '.MuiInputLabel-root.Mui-focused': {
                                        color: theme.palette.secondary.dark
                                    },
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
                            fullWidth
                            multiline
                            label="Message"
                            rows={4}
                            variant="standard"
                            color="secondary"
                            InputLabelProps={{
                                sx: {
                                    color: theme.palette.colorLight,
                                }
                            }}
                            sx={{
                                input: {
                                    color: theme.palette.colorLight,
                                },
                                '.css-66dh3a-MuiInputBase-input-MuiInput-input': {
                                    color: theme.palette.colorLight,
                                },
                                '.MuiInputLabel-root.Mui-focused': {
                                    color: theme.palette.secondary.dark
                                },
                            }}
                        />
                        <Button type="submit"
                            variant="contained"
                            size="medium"
                            color="secondary">
                            Envoyer
                        </Button>
                    </Box>

                    <Box /* Zone image */
                        sx={{
                            height: "50%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            position: "relative",
                            [theme.breakpoints.up('lg')]: {
                                maxWidth: "50%",
                            }
                        }}>
                        <Box /* gauche */
                            sx={{
                                position: "absolute",
                                width: "50%",
                                marginTop: "20%",
                                left: "0",
                                bottom: "3rem",
                                zIndex: "100"
                            }}
                        >
                            <StaticImage /* Image gauche */
                                src="../images/contact/img_contact_1.webp"
                                alt="image d'illustration"
                                style={{
                                    width: "100%",
                                    height: "100%",
                                    borderRadius: "100px 0px 0px 0px",

                                }}
                            />
                        </Box>
                        <Box /* droite */
                            sx={{
                                width: "70%",
                                height: "100%",
                                alignSelf: "flex-end",
                            }}
                        >
                            <StaticImage /* Image droite */
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
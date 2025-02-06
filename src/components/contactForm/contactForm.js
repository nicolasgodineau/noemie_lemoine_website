import React, { useState } from 'react';
import { useTranslation } from "react-i18next";
import { useTheme } from "@mui/material/styles";
import {
    Box,
    TextField,
    Button,
    Container,
    Alert,
    Snackbar
} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import fr from 'date-fns/locale/fr';

const ContactForm = () => {
    const { t } = useTranslation();
    const theme = useTheme();
    const [date, setDate] = useState(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarSeverity, setSnackbarSeverity] = useState('success');
    const [errors, setErrors] = useState({});

    const validateForm = (formData) => {
        const newErrors = {};

        // Validation du prénom
        const name = formData.get('name');
        if (!name || !/^[a-zA-ZÀ-ÿ\s-]+$/.test(name)) {
            newErrors.name = t("form.name_error");
        }

        // Validation du nom
        const lastName = formData.get('last_name');
        if (!lastName || !/^[a-zA-ZÀ-ÿ\s-]+$/.test(lastName)) {
            newErrors.last_name = t("form.last_name_error");
        }

        // Validation de l'email
        const email = formData.get('email');
        if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            newErrors.email = t("form.email_error");
        }

        // Validation du téléphone (10 chiffres)
        const phone = formData.get('phone');
        if (!phone || !/^[0-9]{10}$/.test(phone)) {
            newErrors.phone = t("form.phone_error");
        }

        // Validation de la date
        if (!date) {
            newErrors.date = t("form.date_error");
        }

        // Validation du message (au moins 10 caractères)
        const message = formData.get('message');
        if (!message || message.length < 10) {
            newErrors.message = t("form.message_error");
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        formData.append('date', date ? date.toISOString().split('T')[0] : '');

        if (!validateForm(formData)) {
            setSnackbarMessage(t("form.validation_error"));
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
            return;
        }

        try {
            const response = await fetch('https://formspree.io/f/mleylaok', {
                method: 'POST',
                body: formData,
                headers: {
                    Accept: 'application/json',
                },
            });

            if (response.ok) {
                setSnackbarMessage(t("form.success"));
                setSnackbarSeverity('success');
                setOpenSnackbar(true);
                e.target.reset();
                setDate(null);
                setErrors({});
            } else {
                throw new Error(t("form.error"));
            }
        } catch (error) {
            setSnackbarMessage(error.message);
            setSnackbarSeverity('error');
            setOpenSnackbar(true);
        }
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const inputStyle = {
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderWidth: '0 0 1px 0',
                borderColor: theme.palette.colorLight,
                borderRadius: 0,
            },
            '&:hover fieldset': {
                borderWidth: '0 0 2px 0',
                borderColor: theme.palette.colorLight,
            },
            '&.Mui-focused fieldset': {
                borderWidth: '0 0 2px 0',
                borderColor: theme.palette.colorLight,
            },
            '& input, & textarea': {
                fontSize: '1rem',
                fontFamily: 'Simonetta',
                padding: '.7rem 0rem .1rem 0rem',
            },
            padding: '0',
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.colorLight,
            '&.Mui-focused': {
                color: theme.palette.colorLight,
            },
            fontSize: '1rem',
            fontFamily: 'Simonetta',
            transform: 'translate(1rem, 1rem) scale(1)',
            '&.Mui-focused, &.MuiFormLabel-filled': {
                transform: 'translate(1rem, -0.5rem) scale(0.75)',
            },
        },
        '& .MuiInputBase-input': {
            color: theme.palette.colorLight,
            paddingLeft: 0,
        },
        '& .MuiFormHelperText-root': {
            fontSize: '.7rem',
            fontFamily: 'Simonetta',
            marginLeft: '0rem',
        },
    };

    return (
        <Container maxWidth="md" sx={{ height: "100%" }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.7rem'
                }}>
                    <TextField
                        required
                        name="name"
                        size="small"
                        label={t("form.name")}
                        error={!!errors.name}
                        helperText={errors.name}
                        sx={{ ...inputStyle }}
                    />
                    <TextField
                        required
                        name="last_name"
                        label={t("form.last_name")}
                        error={!!errors.last_name}
                        helperText={errors.last_name}
                        sx={{ ...inputStyle }}
                    />
                    <TextField
                        required
                        type="email"
                        name="email"
                        label={t("form.email")}
                        error={!!errors.email}
                        helperText={errors.email}
                        sx={{ ...inputStyle }}
                    />
                    <TextField
                        required
                        type="tel"
                        name="phone"
                        label={t("form.phone")}
                        error={!!errors.phone}
                        helperText={errors.phone}
                        sx={{ ...inputStyle }}
                    />
                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
                        <DatePicker
                            label={t("form.date")}
                            value={date}
                            onChange={(newDate) => setDate(newDate)}
                            sx={{
                                ...inputStyle,
                                '& .MuiSvgIcon-root': {
                                    color: theme.palette.colorLight,
                                },
                                '& .MuiInputAdornment-root': {
                                    '& .MuiButtonBase-root': {
                                        '&:hover': {
                                            backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                    },
                                },
                            }}
                            slotProps={{
                                textField: {
                                    required: true,
                                    error: !!errors.date,
                                    helperText: errors.date,
                                    name: "date"
                                },
                                openPickerButton: {
                                    sx: {
                                        color: theme.palette.colorLight,
                                    }
                                }
                            }}
                        />
                    </LocalizationProvider>
                    <TextField
                        required
                        name="message"
                        label={t("form.message")}
                        multiline
                        rows={4}
                        error={!!errors.message}
                        helperText={errors.message}
                        sx={inputStyle}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        sx={{
                            backgroundColor: theme.palette.colorLight,
                            color: theme.palette.colorDark,
                        }}
                    >
                        {t("form.submit")}
                    </Button>
                </Box>
            </form>
            <Snackbar
                open={openSnackbar}
                autoHideDuration={6000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity={snackbarSeverity}
                    sx={{ width: '100%' }}
                >
                    {snackbarMessage}
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default ContactForm; 
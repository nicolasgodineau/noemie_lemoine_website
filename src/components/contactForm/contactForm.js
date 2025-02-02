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
                borderColor: theme.palette.colorDark,
            },
            '&:hover fieldset': {
                borderColor: theme.palette.colorDark,
            },
            '&.Mui-focused fieldset': {
                borderColor: theme.palette.colorDark,
            },
        },
        '& .MuiInputLabel-root': {
            color: theme.palette.colorDark,
            '&.Mui-focused': {
                color: theme.palette.colorDark,
            },
        },
        '& .MuiInputBase-input': {
            color: theme.palette.colorDark,
        },
    };

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <form onSubmit={handleSubmit}>
                <Box sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 3
                }}>
                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap'
                    }}>
                        <TextField
                            required
                            name="name"
                            label={t("form.name")}
                            error={!!errors.name}
                            helperText={errors.name}
                            sx={{ ...inputStyle, flex: 1, minWidth: '250px' }}
                        />
                        <TextField
                            required
                            name="last_name"
                            label={t("form.last_name")}
                            error={!!errors.last_name}
                            helperText={errors.last_name}
                            sx={{ ...inputStyle, flex: 1, minWidth: '250px' }}
                        />
                    </Box>

                    <Box sx={{
                        display: 'flex',
                        gap: 2,
                        flexWrap: 'wrap'
                    }}>
                        <TextField
                            required
                            type="email"
                            name="email"
                            label={t("form.email")}
                            error={!!errors.email}
                            helperText={errors.email}
                            sx={{ ...inputStyle, flex: 1, minWidth: '250px' }}
                        />
                        <TextField
                            required
                            type="tel"
                            name="phone"
                            label={t("form.phone")}
                            error={!!errors.phone}
                            helperText={errors.phone}
                            sx={{ ...inputStyle, flex: 1, minWidth: '250px' }}
                        />
                    </Box>

                    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={fr}>
                        <DatePicker
                            label={t("form.date")}
                            value={date}
                            onChange={(newDate) => setDate(newDate)}
                            sx={inputStyle}
                            slotProps={{
                                textField: {
                                    required: true,
                                    error: !!errors.date,
                                    helperText: errors.date,
                                    name: "date"
                                },
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
                            backgroundColor: theme.palette.colorDark,
                            color: theme.palette.colorLight,
                            '&:hover': {
                                backgroundColor: theme.palette.secondary.main,
                                color: theme.palette.colorDark,
                            },
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
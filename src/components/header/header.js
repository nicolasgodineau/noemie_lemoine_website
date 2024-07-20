import React, { useState } from "react";

import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

import { Container } from "@mui/material";



const Header = ({ color, colorText }) => {
    const theme = useTheme();

    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const isMdUp = useMediaQuery(theme.breakpoints.up('md'));


    return (
        <Container
            component="header"
            maxWidth={false}
            disableGutters
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "left",
                backgroundColor: color,
            }}
        >

        </Container>
    );
};

export default Header;
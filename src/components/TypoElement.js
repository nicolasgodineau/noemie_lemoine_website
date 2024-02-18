// TypoElement.js
import React from "react";
import { Typography } from "@mui/material";

const TypoElement = ({ variant, children, sx }) => (
    <Typography variant={variant} sx={{
        fontFamily: "Simonetta",
        ...sx,
    }}>
        {children}
    </Typography>
);

export default TypoElement;

import React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"

const ButtonMenu = ({ to, children, colorText, theme }) => {

    return (
        <Link to={to} style={{ cursor: "pointer" }} >
            <Button
                sx={{
                    ...theme.button,
                    color: colorText,
                    cursor: "pointer"
                }}
            >
                {children}
            </Button>
        </Link>
    )
}

export default ButtonMenu
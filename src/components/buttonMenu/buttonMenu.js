import React from "react"
import { Link } from "gatsby"
import { Button } from "@mui/material"

const ButtonMenu = ({ to, children, colorText, color }) => {

    return (
        <Link to={to} style={{ cursor: "pointer" }} >
            <Button
                sx={{
                    backgroundColor: color,
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
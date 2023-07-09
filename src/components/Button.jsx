import { Padding } from '@mui/icons-material'
import { styled } from '@mui/material'
import React from 'react'

const Button = styled("button")(
    {
        background:"linear-gradient(53deg, #132cd1, #1dffd9)",
        padding:"0.5rem",
        borderRadius:"0.3rem",
        color:"white",
        boxShadow:"0px 4px 6px 0px grey",
        border:"none",
        cursor:"pointer",
        fontSize:"1.3rem",
        transition:"0.4s",

        "&:hover":{
            // background:"linear-gradient(233deg, #132cd1, #1dffd9)"
            boxShadow:"none"
            // background:"red"
        }
    }
)

export default Button

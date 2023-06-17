import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'

const Signup = (props) => {

  return (
    <Box>
        <Form pageType={props.pageType}/>
    </Box>
  )
}

export default Signup

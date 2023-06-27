import { Visibility, VisibilityOff } from '@mui/icons-material'
import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import Form from '../components/Form'
import Flex from '../components/Flex'

const Signup = (props) => {

  return (
      <Flex sx={{justifyContent:"center", height:'100vh', }}>
        <Box sx={{display:"flex",alignItems:"center",flexDirection:'column', padding:'1rem', borderRadius:"1rem", minHeight:"85vh", boxShadow:"0 3px 7px grey"}}>
        <Typography variant='h4'>Register</Typography>
        <Form pageType={props.pageType}/>
        </Box>
        </Flex>
  )
}

export default Signup

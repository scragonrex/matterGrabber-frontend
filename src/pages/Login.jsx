import { Box, Typography } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
import Flex from '../components/Flex'

const Login = (props) => {
  return (
    <Flex sx={{ gap: "9rem" }}>
      <img src="/assets/loginBg.jpg" alt="" srcset="" style={{ height: "100vh", width: "50vw" }} />
      <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100vh", width:"50vw"}}>
        <Box sx={{ display: "flex", justifyContent: 'space-evenly', alignItems: "center", flexDirection: 'column', padding: '1rem' }}>
          <div style={{ marginBottom: "1.5rem" }}><Typography variant='h4' sx={{ fontFamily: "sans-serif" }}>Login Here</Typography></div>
          <Form pageType={props.pageType} />
        </Box>
      </div>
    </Flex>
  )
}

export default Login

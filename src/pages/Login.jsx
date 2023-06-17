import { Box } from '@mui/material'
import React from 'react'
import Form from '../components/Form'
import Flex from '../components/Flex'

const Login = (props) => {
  return (
    <Box style={{backgroundImage :"url(/assets/formbg.jpg)", width:"100vw", height:"100vh",backgroundSize:"cover",backgroundPosition:'center', backgroundRepeat:"no-repeat"}}>
      <Flex sx={{justifyContent:"center"}}>
        <Form pageType={props.pageType}/>
        </Flex>
    </Box>
  )
}

export default Login

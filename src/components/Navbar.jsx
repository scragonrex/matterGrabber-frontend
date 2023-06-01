import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Flex from './Flex'
import logo from "../assests/logo.png"
import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router'
const Navbar = () => {
  const navigate = useNavigate();
  return (
    <Flex sx={{width:"100vw", padding:"0.5rem",justifyContent:"space-between", boxShadow:"0 0 4px"}}>
      <Flex gap={1}>
        <img src={logo} alt="logo" style={{width:"1.5rem", cursor:"pointer"}} onClick={()=>navigate("/")}/>
        <Typography variant='h6'fontFamily="'Righteous', cursive" sx={{cursor:"pointer"}} onClick={()=>navigate("/")}>Matter Grabber</Typography>
      </Flex>

      <Flex sx={{padding:"0.3rem", width:"30%", borderRadius:"10px", backdropFilter:"brightness(0.9)"}}>
        <Search sx={{color:"#6e6e6e"}}/>
        <input type="text" placeholder='Search..' style={{border:"none",outline:"none", width:"100%", background:"transparent", fontSize:"1rem"}}/>
      </Flex>

      <Flex>
        <IconButton>
          <ShoppingCart onClick={()=>navigate("/cart")}/>
        </IconButton>
        <IconButton>
          <AccountCircle onClick={()=>navigate("/UserProfile")}/>
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default Navbar

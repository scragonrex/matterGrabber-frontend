import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import Flex from './Flex'
import { AccountCircle, Search, ShoppingCart } from '@mui/icons-material'
import { useNavigate } from 'react-router'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useDispatch } from 'react-redux'
import { setLogout } from '../store/authSlice'

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = ()=>{
    handleClose();
    navigate('/userProfile');
  }
  const handleLogout = ()=>{
    handleClose();
    dispatch(setLogout());
  }
  return (
    <Flex sx={{padding:"0.5rem",justifyContent:"space-between", boxShadow:"0 0 4px"}}>
      <Flex gap={1}>
        <img src='assets/logo.png' alt="logo" style={{width:"1.5rem", cursor:"pointer"}} onClick={()=>navigate("/")}/>
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
          <AccountCircle onClick={handleClick}/>
        </IconButton>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleProfile}>Profile</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
      </Flex>
    </Flex>
  )
}

export default Navbar

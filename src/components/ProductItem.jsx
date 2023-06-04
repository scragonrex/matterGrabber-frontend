import { Box, Typography } from '@mui/material'
import React from 'react'
import Flex from './Flex'
import { useNavigate } from 'react-router';

const ProductItem = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{padding:"1rem", maxWidth:"25rem", borderRadius:"0.5rem", cursor:"pointer", boxShadow:"0px 2px 4px 0px grey"}}>
      <Flex sx={{justifyContent:"center"}}>
      <img src="https://m.media-amazon.com/images/I/81xr5ikwmLL._UX695_.jpg" alt="product"
      style={{height:"100%", width:"70%"}} />
      </Flex>
      <Box mt='0.5rem '>
        <Typography gutterBottom variant="h6" color='#1a90e1' component="div" sx={{ cursor: "pointer", "&:hover": { color: "#f4a127" } }}>
          Reebok's Men's Running Shoe
        </Typography>
        <Typography>Price &#x20b9; 9500</Typography>
      </Box>
    </Box>
  )
}

export default ProductItem

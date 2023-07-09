import React from 'react'
import Flex from '../components/Flex'
import { Box, Typography } from '@mui/material'
import ProductItem from '../components/ProductItem'
import Silder from '../components/Silder'

function Home() {
  return (<>
    <Silder/>
   <Flex sx={{justifyContent:"space-between", padding:"1rem", backdropFilter:"brightness(0.98)"}}>
    <Box sx={{width:"60%"}}>
     <Typography variant='h2'>Hello!. Welcome to our Matter Grabber.</Typography> 
     <Typography variant='h4'>Great destination for exciting deals on affordable products</Typography>
    </Box>
    <Flex sx={{width:"50%", justifyContent:"center"}}>
    <img src="/assets/photo1.png" alt="" style={{ height:"30rem"}}/>
    </Flex>
   </Flex>
   <Box>
    <Typography variant='h4' textAlign='center'>New Products</Typography>
    <Box sx={{display:"flex", justifyContent:"center", gap:"1rem", flexWrap:"wrap"}}>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    <ProductItem/>
    </Box>
   </Box>
   </>
  )
}

export default Home

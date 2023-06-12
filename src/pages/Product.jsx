import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import Flex from '../components/Flex'

function Product() {
  return (
    <Box sx={{ display: "flex", flexDirection: "row", margin: "2rem", gap: "1rem" }}>
      <Flex sx={{flexDirection:"column"}}>
        <Flex sx={{ height: "38rem", borderRadius: "0.7rem", backdropFilter: "brightness(0.96)", width: "43rem", justifyContent: "center"}}>
          <img src="/assets/product.png" alt=""
            style={{ objectFit: "contain" }} />
        </Flex>
        <Flex mt={2} sx={{gap:"2rem"}}>
          <Button sx={{width:"20rem", height:"3rem"}}  variant="contained">Add to Cart</Button>
          <Button sx={{width:"20rem", height:"3rem"}} variant="contained">Buy Now</Button>
        </Flex>
      </Flex>

      <Box p={2}>
        <Typography variant='h3'>Fila Mens Ardito Plus Sneaker</Typography>
        <Typography variant='h4'>&#x20b9;1326</Typography>
        <Typography mt={2} variant='h5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus suscipit facilis reiciendis possimus ipsam nobis voluptatum nulla alias cumque, quaerat, eos repellat odit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, facilis.</Typography>
      </Box>
    </Box>
  )
}

export default Product

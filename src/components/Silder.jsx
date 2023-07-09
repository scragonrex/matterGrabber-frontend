import { ArrowLeft, ArrowRight } from '@mui/icons-material'
import React, { useState } from 'react'

const Silder = () => {

    const [colorIndex, setColorIndex] = useState(0);
    const colors = ["blue", "green", "orange", "grey"]
    const handleNext = ()=>{
        if(colorIndex<colors.length-1)
        setColorIndex(colorIndex+1);
        else
        setColorIndex(0);
        console.log(colorIndex)
    }

    const handlePrev = ()=>{
        if(colorIndex>0)
        setColorIndex(colorIndex-1);
        else
        setColorIndex(colors.length-1);
    }
  return (
    <div style={{border:"2px solid black", width:"100d%", height:"27rem", background:"red", display:"flex", alignItem:"center", justifyContent:"center", padding:"2rem", flexDirection:"row"}}>
      <div><ArrowLeft onClick={handlePrev}sx={{color:"white", fontSize:"3rem", position:"absolute", cursor:"pointer", left:"2rem"}}/></div>
      <div style={{background:colors[colorIndex], width:"100%", height:"100%"}}></div>
      <div><ArrowRight onClick={handleNext} sx={{color:"white", fontSize:"3rem", position:"absolute", cursor:"pointer", right:"2rem"}}/></div>
    </div>
  )
}

export default Silder

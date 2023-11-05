import React from 'react'
import {Box} from '@mui/material'
import {styled} from '@mui/material'


const StyledBox= styled(Box)(({ theme }) => ({height: '250px', width:'250px', backgroundColor: theme.status.danger}))

const StyledBox1= styled(Box)(({ theme }) => ({height: '250px', width:'250px', backgroundColor: theme.palette.neutral?.darker}))


export const MuiResponsiveness = () => {
  return (
    <>
<Box sx={{height:'300px', 
width: {
    xs: 100,  //0
    sm:200,     // 600
    md: 300,    // 900
    lg: 400,    //1200px
    xl: 500}    //1536 px
    ,bgcolor: 'secondary.main'}}></Box>

<StyledBox/>
<StyledBox1/>
</>

  )
}

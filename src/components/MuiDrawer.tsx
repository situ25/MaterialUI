import React, { useState } from 'react'
import {Box,Drawer, Typography, IconButton } from '@mui/material'
import MenuIcon from'@mui/icons-material/Menu'

export const MuiDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] =useState(false)

  return (

    <>
    <IconButton size='large' edge='start' color='inherit' onClick={() => setIsDrawerOpen(true)}>
        <MenuIcon/>
    </IconButton>
    <Drawer anchor='left' open={isDrawerOpen} onClose={()=> setIsDrawerOpen(false)}>
    <Box p={2} width='250px' textAlign='center' role='presentation'>
        <Typography variant='h6'> Side panel</Typography>
    </Box>
    </Drawer>
    </>
  )
}

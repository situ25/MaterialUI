import React from 'react'
import {Box,Grid} from '@mui/material'

export const MuiLayout = () => {
  return (
        <>
        <Box 
        sx={{
            backgroundColor: 'primary.main', 
            color: 'white', 
            height: '100px', 
            width: '100px',
            padding: '16px',
            '&:hover': {
                backgroundColor: 'primary.light'
            }

        }}
        >
            Codeevolution
        </Box>

        {/* using system properties */}
        {/* https://mui.com/system/properties/ */}
        <Box display='flex' height='100px' width='100px' bgcolor='success.light' p={2} >

        </Box>

        <Grid container my={4} rowSpacing={2} columnSpacing={1}>
            <Grid item xs={12} sm={6}><Box bgcolor='primary.light' p={1}>Item 1</Box></Grid>
            <Grid item xs={12} sm={6}><Box bgcolor='primary.light' p={1}>Item 2</Box></Grid>
            <Grid item xs={12} sm={6}><Box bgcolor='primary.light' p={1}>Item 3</Box></Grid>
            <Grid item xs={12} sm={6}><Box bgcolor='primary.light' p={1}>Item 4</Box></Grid>            
        </Grid>
        
        </>
  )
}

import React from 'react'
import {Box, Breadcrumbs, Link,Typography} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { text } from 'stream/consumers'

export const MuiBreadcrumbs = () => {
  return (
    <Box m={2}>
      <Breadcrumbs separator={<NavigateNextIcon/>}>
      <Link underline='hover' href='#'>Home</Link>
      <Link underline='hover' href='#'>ACatalog</Link>
      <Link underline='hover' href='#'>Accessories</Link>
      <Typography color='text.primary'>Shoes</Typography>
      </Breadcrumbs>
    </Box>
  )
}

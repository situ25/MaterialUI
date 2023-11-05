import React from 'react'
import { Stack,Tooltip,IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const MuiTooltip = () => {
  return (
    <Stack spacing={5} direction='row'>
    <Tooltip title='Delete'>
    <IconButton><DeleteIcon/></IconButton>
    </Tooltip>
    <Tooltip title='Delete' placement='right'>
    <IconButton><DeleteIcon/></IconButton>
    </Tooltip>
    <Tooltip title='Delete' placement='right' enterDelay={500} leaveDelay={500}>
    <IconButton><DeleteIcon/></IconButton>
    </Tooltip>
    </Stack>
  )
}

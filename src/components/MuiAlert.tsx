import React from 'react'
import { Stack,Alert,Button,AlertTitle } from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'

export const MuiAlert = () => {
  return (
    <Stack>
        <Alert severity='error'>This is an alert</Alert>
        <Alert severity='info'>This is an alert</Alert>
        <Alert severity='warning'>This is an alert</Alert>
        <Alert severity='success'>This is an alert</Alert>
        <Alert severity='success' icon={<CheckIcon fontSize='inherit'/>}>This is an alert</Alert>
        <Alert severity='warning' ><AlertTitle>Warning</AlertTitle>This is an alert</Alert>
        <Alert severity='error' variant='outlined'>This is an alert</Alert>
        <Alert severity='error' variant='outlined' onClose={()=> alert('closing alert')}>This is an alert</Alert>
        <Alert severity='error' variant='outlined' action={<Button>Undo</Button>}>This is an alert</Alert>
    </Stack>
  )
}

import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction='row'>
        <Badge badgeContent={10} color='primary'> <MailIcon></MailIcon></Badge>
        <Badge badgeContent={100} color='primary'> <MailIcon></MailIcon></Badge>
        <Badge badgeContent={100} max={999} color='primary'> <MailIcon></MailIcon></Badge>
        <Badge badgeContent={10} color='secondary'> <MailIcon></MailIcon></Badge>
        <Badge variant='dot' color='secondary' invisible={false}> <MailIcon></MailIcon></Badge>
    </Stack>
  )
}

import React from 'react'
import {Stack,Avatar,AvatarGroup} from '@mui/material'

export const MuiAvatar = () => {
  return (
    <Stack spacing={4}>
        <Stack direction='row'>
                <Avatar sx={{bgcolor:'primary.light'}}>CK</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>SR</Avatar>
        </Stack>
        <Stack direction='row'>
                <Avatar src='https://randomuser.me/api/portraits/women/48.jpg'>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/47.jpg'>SR</Avatar>
        </Stack>

        <Stack direction='row'>
                <AvatarGroup max={4}>
                <Avatar src='https://randomuser.me/api/portraits/women/48.jpg'>CK</Avatar>
                <Avatar src='https://randomuser.me/api/portraits/men/47.jpg'>SR</Avatar>
                <Avatar variant='square' sx={{bgcolor:'primary.light'}}>CK</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>SR</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>SR</Avatar>
                <Avatar sx={{bgcolor:'success.light'}}>SR</Avatar>
                </AvatarGroup>
        </Stack>
    </Stack>
  )
}

import React from 'react'
import {Stack,Skeleton} from '@mui/material'

export const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width='250px'>
        <Skeleton variant='text'/>
        <Skeleton variant='circular' width={40} height={40}/>
        <Skeleton variant='rectangular' width={250} height={150}/>
        <Skeleton variant='rectangular' width={250} height={150} animation='wave'/>
        <Skeleton variant='rectangular' width={250} height={150} animation={false}/>
    </Stack>
  )
}

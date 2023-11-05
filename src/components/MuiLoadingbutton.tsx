import React from 'react'
import {Stack} from '@mui/material'
import {LoadingButton} from '@mui/lab'
import SaveIcon from '@mui/icons-material/Save'

export const MuiLoadingbutton = () => {
  return (
    <Stack spacing={2} direction='row'>
        <LoadingButton variant='outlined'>Submit</LoadingButton>
        <LoadingButton loading variant='outlined'>Submit</LoadingButton>
        <LoadingButton loadingIndicator='Loading...'  variant='outlined'>Fecth Data</LoadingButton>
        <LoadingButton  loading loadingIndicator='Loading...'  variant='outlined'>Fetch Data</LoadingButton>
        <LoadingButton   loadingPosition='start'  variant='outlined' startIcon={<SaveIcon/>}>Save</LoadingButton>
        <LoadingButton  loadingPosition='start' loading  variant='outlined'  startIcon={<SaveIcon/>}>Save</LoadingButton>
    </Stack>
  )
}

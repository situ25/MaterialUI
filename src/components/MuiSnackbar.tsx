import React,{useState,forwardRef} from 'react'
import {Stack,Snackbar,Button,Alert,AlertProps} from '@mui/material'


export const MuiSnackbar = () => {
const [open, setopen] = useState(false);
const handleClose= (event?: React.SyntheticEvent | Event, reason?: string) => {
  if(reason === 'clickaway'){
    return
  }
  setopen(false)
}

const SnackbarAlert = forwardRef<HTMLDivElement, AlertProps>(
  function SnackbarAlert(props, ref){
    return <Alert elevation={6} ref={ref} {...props} /> 
  }
)

  return (
    <Stack>
    <Stack>
      <Button variant='contained' sx={{width: '30px'}} onClick={() => setopen(true)}>Submit</Button>
      <Snackbar message='Form submitted successfully'
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      />
    </Stack>
        <Stack>
        <Button variant='outlined' sx={{width: '30px'}} onClick={() => setopen(true)}>Submit1</Button>
          <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <SnackbarAlert onClose={handleClose} severity='success'>Form Submitted</SnackbarAlert>
          </Snackbar>
        </Stack>
    </Stack>

  )
}

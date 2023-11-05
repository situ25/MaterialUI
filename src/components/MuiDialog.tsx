import React,{useState} from 'react'
import {Button,DialogTitle,DialogContent,DialogContentText,DialogActions, Dialog} from '@mui/material'

export const MuiDialog = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
    <Button onClick={()=> setOpen(true)}>Submit</Button>
    <Dialog open={open}>
        <DialogTitle>Submit Application</DialogTitle>
        <DialogContent>
            <DialogContentText>Are you sure you wish to submit the test as you won't be able to change later</DialogContentText>
        </DialogContent>
        <DialogActions>
            <Button onClick={()=> setOpen(false)}>Cancel</Button>
            <Button onClick={()=> setOpen(false)}>Submit</Button>
        </DialogActions>
    </Dialog>
    </>
  )
}

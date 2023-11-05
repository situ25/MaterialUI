import React,{useState} from 'react'
import {Chip, Stack,Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'

export const MuiChip = () => {
        const [chips,setChips] = useState(['chips 1','chips 2','chips 3'])
        const handledelete= (chipToDelete:String) => {
            setChips(chips => chips.filter((chip) => chip!==chipToDelete))
        }
  return (

    <Stack direction='row' spacing={2}>
        <Chip label="chip1" color='primary'/>
        <Chip label="chip1" color='error' variant='outlined' icon={<FaceIcon/>}/>
        <Chip label="chip1" color='error' variant='outlined' avatar={<Avatar>V</Avatar>}/>
        <Chip label="chip1" color='primary' onClick={()=> alert("chip clicked")} onDelete={handledelete}/>
        {
            chips.map(chip=>(
                <Chip  label={chip} 
                color='error'
                onClick={()=> alert('Clicked')}
                onDelete={()=>handledelete(chip)}
                />
            ))
        }


        </Stack>
  )
}

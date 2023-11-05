import React from 'react'
import { Stack, Button, IconButton,ButtonGroup, ToggleButton, ToggleButtonGroup } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import {useState} from 'react';


export const MuiButton = () => {
    const [formats, setFormats] = useState<string[]>([] )
    const handleFormatChange= (_event: React.MouseEvent<HTMLElement>, updatedFormats: string[]) => {
        setFormats(updatedFormats);
    } 
    console.log({
        formats,
    })
  return (
    <Stack spacing={4}>
        <Stack spacing={2} direction='row'>
            <Button variant='text' href='https://google.com'>text</Button>
            <Button variant='outlined'>outlined</Button>
            <Button variant='contained'>contained</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' color='primary'>Primary</Button>
            <Button variant='contained' color='secondary'>Primary</Button>
            <Button variant='contained' color='error'>Primary</Button>
            <Button variant='contained' color='success'>Primary</Button>
            <Button variant='contained' color='warning'>Primary</Button>
            <Button variant='contained' color='info'>Primary</Button>
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
            <Button variant='contained' size='small'>Small</Button>
            <Button variant='contained' size='medium'>Small</Button>
            <Button variant='contained' size='large'>Small</Button>
        </Stack>

        <Stack spacing={2} direction='row'>
            <Button variant='contained' startIcon={<SendIcon/>} disableRipple>Send</Button>
            <Button variant='contained' endIcon={<SendIcon/>} disableElevation>Send</Button>
            <IconButton color='success' size='medium' onClick={() => alert("Was ere")}> <SendIcon/> </IconButton>
        </Stack>

        <Stack direction='row' spacing={2}>
            <ButtonGroup variant='contained'>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
        </Stack>

        <Stack direction='row'>
        {/* String[] is useful when exclusive is not mentioned */}
            <ToggleButtonGroup value={formats} onChange={handleFormatChange} exclusive>     
                <ToggleButton value='bold'> <FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
    </Stack>
  )
}

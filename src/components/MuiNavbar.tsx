import React, { useState } from 'react'
import {AppBar, Toolbar, Stack, IconButton, Button, Typography, Menu, MenuItem} from '@mui/material'
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'

export const MuiNavbar = () => {
    const [anchorEl, setAnchorEl] = useState<null| HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick =(event: React.MouseEvent<HTMLButtonElement>) =>{
        setAnchorEl(event.currentTarget)
    }
    const handleClose= ()=>{
        setAnchorEl(null)
    }

   return (
    <AppBar position='static'>
        {/* Toolbar by default adds padding */}
        <Toolbar>
            <IconButton size='large' color='inherit' edge='start'>
                <CatchingPokemonIcon />
            </IconButton>
            <Typography variant='h6' component='div' sx={{flexGrow:1}}>
                POKEMONAPP
            </Typography>
            <Stack spacing={2} direction='row'>
                <Button color='inherit'>Features</Button>
                <Button color='inherit'>Pricing</Button>
                <Button color='inherit'>About</Button>
                <Button color='inherit' id='resource-button' onClick={handleClick} endIcon={<KeyboardArrowDownIcon/>}>Resources</Button>
                <Button color='inherit'>Login</Button>
            </Stack>
            {/* Menu is hidden by default */}
            <Menu id='resource-menu' anchorEl={anchorEl} open={open} onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical:'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem onClick={handleClose}>Blog</MenuItem>
                <MenuItem onClick={handleClose}>PodCast</MenuItem>
            </Menu>
        </Toolbar>
    </AppBar>

  )
}

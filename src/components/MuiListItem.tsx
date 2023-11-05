import React from 'react'
import { Box,List,ListItem,ListItemButton,ListItemAvatar,Avatar,ListItemText,Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'

export const MuiListItem = () => {
  return (
    <Box>
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemAvatar><Avatar><MailIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary='List Item 1' secondary='secondry list item'/>
                </ListItemButton>
            </ListItem>
            <ListItem>
            <ListItemAvatar><Avatar><MailIcon/></Avatar></ListItemAvatar>
                    <ListItemText primary='List Item 1' secondary='secondry list item'/>
            </ListItem>
        </List>
    </Box>
  )
}

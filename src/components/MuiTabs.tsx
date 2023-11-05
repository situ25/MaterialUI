import React,{useState} from 'react'
import {Box,Tab} from '@mui/material'
import {TabContext,TabList,TabPanel} from '@mui/lab'
import FavoriteIcon from '@mui/icons-material/Favorite'

export const MuiTabs = () => {
    const [value, setValue] = useState('1');
    const handleChnage= (event: React.SyntheticEvent,newValue:string) =>{
        setValue(newValue)
    }
  return (
    <Box>
        <TabContext value={value}>
            <Box sx={{borderBottom:1,borderColor:'divider', width:'400px'}}>
                <TabList onChange={handleChnage} textColor='secondary' indicatorColor='secondary' centered variant='scrollable' scrollButtons='auto'>
                    <Tab label='Tab one' value='1' icon={<FavoriteIcon/>} iconPosition='start'/>
                    <Tab label='Tab two' value='2' disabled/>
                    <Tab label='Tab three' value='3'/>
                    <Tab label='Tab four' value='4'/>
                    <Tab label='Tab five' value='5'/>
                    <Tab label='Tab six' value='6'/>
                </TabList>
            </Box>
            <TabPanel value='1'>Tab 1</TabPanel>
            <TabPanel value='2'>Tab 2</TabPanel>
            <TabPanel value='3'>Tab 3</TabPanel>
            <TabPanel value='4'>Tab 4</TabPanel>
            <TabPanel value='5'>Tab 4</TabPanel>
            <TabPanel value='6'>Tab 6</TabPanel>
        </TabContext>
    </Box>
  )
}

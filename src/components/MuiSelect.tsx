// import React, { useState } from 'react'
// import {Box,MenuItem,TextField}   from '@mui/material'

// export const MuiSelect = () => {
//     const [country, setCountry] = useState('')
//     console.log({country})
//     const handleChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
//         setCountry(event.target.value as string)
//     } 
//   return (
//     <Box width={250}>
//         <TextField label='Select Country' select fullWidth value={country} onChange={handleChange}>
//             <MenuItem value='IN'>India</MenuItem>
//             <MenuItem value='US'>USA</MenuItem>
//             <MenuItem value='AU'>Australia</MenuItem>
//         </TextField>
//     </Box>
//   )
// }

//Above one is for selecting only one option

import React, { useState } from 'react'
import {Box,MenuItem,TextField}   from '@mui/material'

export const MuiSelect = () => {
    const [country, setCountry] = useState<string[]>([])
    console.log({country})
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) =>{
        const value= event.target.value
        setCountry(typeof value === 'string'? value.split(','): value)
    } 
  return (
    <Box width={250}>
        <TextField label='Select Country' select fullWidth value={country} onChange={handleChange}
        SelectProps={{
            multiple: true
        }}
        >
            <MenuItem value='IN'>India</MenuItem>
            <MenuItem value='US'>USA</MenuItem>
            <MenuItem value='AU'>Australia</MenuItem>
        </TextField>
    </Box>
  )
}

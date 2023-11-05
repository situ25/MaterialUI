import React from 'react'
import {TextField, Stack, Autocomplete} from '@mui/material'
import { useState } from 'react'

export const MuiAutocomplete = () => {
    const skills= ['HTML', 'CSS', 'Javascript', 'Typescript', 'React']
    const [value,setValue] = useState<string |null>(null)
    console.log(value)

    //With id
    type Skill={
        id: number
        label: string
    }
    const skillsOptions= skills.map((skill,index) => ({
        id: index=1,
        label: skill,
    }))

    const [skill, setSkill] =useState<Skill| null>(null)
    console.log(skill)

  return (
        <Stack spacing={2} width='250px'>
            <Autocomplete
            options={skills}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={value}
            onChange={(event: any, newValue:string| null) => setValue(newValue)}
            freeSolo
            // freeSolo allows for enetering any text and accepting it
             />

            <Autocomplete
            options={skillsOptions}
            renderInput={(params) => <TextField {...params} label='Skills'/>}
            value={skill}
            onChange={(event: any, newValue: Skill | null) => setSkill(newValue)}
             />
        
        </Stack>
  )
}

import React,{useState} from 'react'
import {Box, FormControlLabel, Checkbox, FormGroup, FormLabel,FormControl } from '@mui/material'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder'
import BookmarkIcon from '@mui/icons-material/Bookmark'

export const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState(false)
    console.log(acceptTnC)
    const handleChange= (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }
    
    const [skills, setSkills] = useState<string[]>([])
    console.log(skills)
    const handleSkillChange= (event : React.ChangeEvent<HTMLInputElement>) => {
        const index= skills.indexOf(event.target.value)
        if(index ===-1){ // if skill not present add it
            setSkills([...skills,event.target.value])
        }else{   //remove it from present
            setSkills(skills.filter((skill) => skill!= event.target.value))
        }

    }
  return (
    <Box>
        <Box>
            <FormControlLabel label='I accept terms and conditions'
            control={<Checkbox checked={acceptTnC} onChange={handleChange} />}
            />
        </Box>
        <Box>
         {/* to create bookmark checkbox  */}
         <Checkbox 
         icon={<BookmarkBorderIcon/>} 
         checkedIcon={<BookmarkIcon/>}
         checked={acceptTnC}
         onChange={handleChange}
         />
        </Box>

        <Box>
            {/* TO have multiple select checkboxes */}
            <FormControl>
                <FormLabel>SKILLS</FormLabel>
                <FormGroup row>
                    <FormControlLabel value='html' label='HTML'
                    control={<Checkbox checked={skills.includes('html')} onChange={handleSkillChange} />}
                    />
                    <FormControlLabel value='css' label='CSS'
                    control={<Checkbox checked={skills.includes('css')} onChange={handleSkillChange} />}
                    />
                    <FormControlLabel value='javascript' label='Javascript'
                    control={<Checkbox checked={skills.includes('javascript')} onChange={handleSkillChange} />}
                    />
                </FormGroup>
            </FormControl>
        </Box>
    </Box>
  )
}

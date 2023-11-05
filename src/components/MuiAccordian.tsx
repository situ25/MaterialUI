import {Accordion, AccordionSummary, AccordionDetails, Typography} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

export const MuiAccordian = () => {
  return (
    <div>
        <Accordion>
            <AccordionSummary id='panel1-header' expandIcon={<ExpandMoreIcon/>}>
                <Typography >Accordian 1</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi autem dicta magnam? Dolorum, labor
                </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary id='panel2-header' expandIcon={<ExpandMoreIcon/>}>
                <Typography >Accordian 2</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi autem dicta magnam? Dolorum, labor
                </AccordionDetails>
         </Accordion>
         <Accordion>
            <AccordionSummary id='panel3-header' expandIcon={<ExpandMoreIcon/>}>
                <Typography >Accordian 3</Typography>
            </AccordionSummary>
            <AccordionDetails>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi autem dicta magnam? Dolorum, labor
                </AccordionDetails>
         </Accordion>
    </div>
  )
}

import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Typography } from '@mui/material';

export default function Accordian() {
    return (
        <>
            <Accordion disableGutters sx={{ backgroundColor:"#F6F6F6",fontSize:"20px",boxShadow: 'none', border: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header"> Gender </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize:"15px"}}>Men</Typography>
                    <Typography sx={{fontSize:"15px"}}>Woman</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters sx={{backgroundColor:"#F6F6F6",fontSize:"20px", boxShadow: 'none', border: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header"> Sale</AccordionSummary>
                <AccordionDetails>
                    <Typography  sx={{fontSize:"15px"}}>Sport</Typography>
                    <Typography  sx={{fontSize:"15px"}}>Luxury</Typography>
                </AccordionDetails>
            </Accordion>

            <Accordion disableGutters sx={{backgroundColor:"#F6F6F6",fontSize:"20px", boxShadow: 'none', border: 'none', '&:before': { display: 'none' } }}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header"> Product</AccordionSummary>
                <AccordionDetails>
                    <Typography  sx={{fontSize:"15px"}}>Bag</Typography>
                    <Typography  sx={{fontSize:"15px"}}>Sweater</Typography>
                    <Typography  sx={{fontSize:"15px"}}>Sunglass</Typography>
                </AccordionDetails>
            </Accordion>
        </>
    );
}

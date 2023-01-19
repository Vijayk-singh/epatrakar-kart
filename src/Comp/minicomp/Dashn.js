import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ArticleIcon from '@mui/icons-material/Article';
import { Button } from '@mui/material';
import MonochromePhotosIcon from '@mui/icons-material/MonochromePhotos';
import LowPriorityIcon from '@mui/icons-material/LowPriority';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PollIcon from '@mui/icons-material/Poll';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import BrowserUpdatedIcon from '@mui/icons-material/BrowserUpdated';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import CoPresentIcon from '@mui/icons-material/CoPresent';
import BallotIcon from '@mui/icons-material/Ballot';
import EventNoteIcon from '@mui/icons-material/EventNote';

export default function Dashv() {
    
  return (
    <div className='dnav' style={{height:'100%', fontStyle:'arial',backgroundColor:'hsl(210, 35%, 15%)', color:'white',fontSize:'20px'}}>
        <div className='text-center pt-3 pb-1'>
            <p>Dashboard</p>
        </div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white',  alignText:'center'}}
        ><ArticleIcon />
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Article Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><MonochromePhotosIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Photos Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
           sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><LowPriorityIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Priority Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><VideoLibraryIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Videos Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><PollIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Poll Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><NoteAltIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Tools/Reports</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><BrowserUpdatedIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Contest Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
         <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
         
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel2a-content"
          id="panel2a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><CollectionsBookmarkIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>CMS</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><SportsBaseballIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Sports Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><CoPresentIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Board Result </Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><BallotIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Election</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon sx={{color:'white'}}/>}
          aria-controls="panel3a-content"
          id="panel3a-header"
          sx={{backgroundColor:'hsl(210, 35%, 15%)', color:'white'}}
        ><EventNoteIcon/>
          <Typography sx={{paddingLeft:'20px', paddingBottom:'10px'}}>Other Events</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Button>Add topic tag</Button>
         <Button>Topic tag management</Button>
         <Button>Top trending topics</Button>
         
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
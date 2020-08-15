import React from 'react';
import {
  Grid,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AlbumIcon from '@material-ui/icons/Album';
import MusicNoteIcon from '@material-ui/icons/MusicNote';

import ReactPlayer from 'react-player';

const useStyles = makeStyles((theme) => ({
  heading: {
    height: '5vh',
    paddingTop: '2rem',
  },
  audioSection: {
    minHeight: '95vh',
    paddingTop: '10rem',
  },
  acc: {
    backgroundColor: theme.palette.secondary.main,
    width: '800px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },

  exp: {
    color: '#000',
    marginRight: '1rem',
  },
  details: {
    height: '50vh',
  },
}));

const Audio = () => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography align='center' variant='h2'>
          {'audio'.toUpperCase()}
        </Typography>
        <Typography align='center' variant='h3'>
          [my voice + lots of special effects]
        </Typography>
      </div>

      <Grid justify='center' className={classes.audioSection} container item>
        <Grid item>
          <Accordion
            className={classes.acc}
            expanded={expanded === 'panel1'}
            onChange={handleChange('panel1')}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1bh-content'
              id='panel1bh-header'>
              <Typography className={classes.exp} align='center' variant='h5'>
                open to experience
              </Typography>
              <AlbumIcon fontSize='large' />
              <MusicNoteIcon fontSize='large' />
            </AccordionSummary>
            <AccordionDetails className={classes.details}>
              <ReactPlayer
                height='100%'
                width='100%'
                url='https://soundcloud.com/hu_cray/sets/2019-1'
              />
            </AccordionDetails>
          </Accordion>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Audio;

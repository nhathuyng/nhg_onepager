import React from 'react';
import {
  Grid,
  Typography,
  TextField,
  Button,
  MenuItem,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: '500px',
      [theme.breakpoints.down('sm')]: {
        width: '300px',
      },
      [theme.breakpoints.down('xs')]: {
        width: '100%',
      },
    },
    '& .MuiTypography-h6': {
      '&:hover': {
        color: '#fff',
      },
    },
  },
  heading: {
    height: '5vh',
    paddingTop: '2rem',
  },
  contactSection: {
    minHeight: '95vh',
    paddingTop: '10rem',
  },
  input: {
    color: 'white',
  },
  formBtn: {
    marginTop: '5vh',
    marginBottom: '20vh',
  },
}));

const jobs = [
  {
    value: 'Fulltime Frontend Intern',
    label: 'Fulltime Frontend Intern',
  },
  {
    value: 'Junior Frontend Developer',
    label: 'Junior Frontend Developer',
  },
  {
    value: 'Graphics & Visuals',
    label: 'Graphics & Visuals',
  },

  {
    value: 'Voiceover',
    label: 'Voiceover',
  },
  {
    value: 'Posing in your ad',
    label: 'Posing in your ad',
  },
];

const Contact = () => {
  const classes = useStyles();

  const HireForm = () => {
    return (
      <>
        <Grid item>
          <Typography variant='h6'>name || company</Typography>
          <TextField
            size='medium'
            color='secondary'
            id='name'
            variant='filled'
            InputProps={{ className: classes.input }}
          />
        </Grid>
        <Grid item>
          <Typography variant='h6'>email</Typography>
          <TextField
            InputProps={{ className: classes.input }}
            color='secondary'
            id='email'
            variant='filled'
          />
        </Grid>
        <Grid item>
          <Typography variant='h6'>job</Typography>
          <TextField
            defaultValue='Junior Frontend Developer'
            InputProps={{ className: classes.input }}
            color='secondary'
            id='job'
            variant='filled'
            select>
            {jobs.map(({ value, label }, index) => (
              <MenuItem key={index} value={value}>
                {label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item>
          <Typography variant='h6'> your message</Typography>
          <TextField
            InputProps={{ className: classes.input }}
            multiline
            rows={10}
            color='secondary'
            id='message'
            variant='filled'
          />
        </Grid>
        {/* <Grid item container justify='center'>
          <Button variant='contained' color='secondary'>
            <Typography variant='h3'>SEND</Typography>
          </Button>
        </Grid> */}
      </>
    );
  };

  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography align='center' variant='h2'>
          {'hire me'.toUpperCase()}
        </Typography>
        <Typography align='center' variant='h3'>
          [preferably as a developer]
        </Typography>
      </div>

      <Grid
        alignItems='center'
        direction='column'
        className={classes.contactSection}
        container
        item>
        <form className={classes.root}>
          <HireForm />
          <Grid item container justify='center'>
            <Button
              disableRipple
              className={classes.formBtn}
              endIcon={
                <SendIcon style={{ fontSize: '35px', color: 'white' }} />
              }
              variant='contained'
              color='secondary'>
              <Typography variant='h3'>SEND</Typography>
            </Button>
          </Grid>
        </form>
      </Grid>
    </React.Fragment>
  );
};

export default Contact;

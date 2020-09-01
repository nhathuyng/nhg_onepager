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
import RenderOnSight from './components/RenderOnSight';
import { useState } from 'react';
import axios from 'axios';

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
    value: 'Junior Frontend Developer',
    label: 'Junior Frontend Developer',
  },
  {
    value: 'Fulltime Frontend Intern',
    label: 'Fulltime Frontend Intern',
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
  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    job: '',
    message: '',
  });
  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });
  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });
      setInputs({
        name: '',
        email: '',
        message: '',
        job: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };

  const handleChange = (prop) => (e) => {
    e.persist();
    setInputs((prev) => ({
      ...prev,
      [prop]: e.target.value,
    }));

    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
    console.log(inputs);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
    axios({
      method: 'POST',
      url: 'https://formspree.io/xrgydnoo',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.'
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <React.Fragment>
      <RenderOnSight>
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
          <form onSubmit={handleSubmit} className={classes.root}>
            <Grid item>
              <Typography variant='h6'>name || company</Typography>
              <TextField
                onChange={handleChange('name')}
                color='secondary'
                id='name'
                variant='filled'
                InputProps={{ className: classes.input }}
                value={inputs.name}
              />
            </Grid>
            <Grid item>
              <Typography variant='h6'>email</Typography>
              <TextField
                onChange={handleChange('email')}
                InputProps={{ className: classes.input }}
                color='secondary'
                id='email'
                variant='filled'
                value={inputs.email}
              />
            </Grid>
            <Grid item>
              <Typography variant='h6'>job</Typography>
              <TextField
                value={inputs.job}
                onChange={handleChange('job')}
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
                value={inputs.message}
                onChange={handleChange('message')}
                InputProps={{ className: classes.input }}
                multiline
                rows={10}
                color='secondary'
                id='message'
                variant='filled'
              />
            </Grid>
            <Grid item container justify='center'>
              <Button
                type='submit'
                disableRipple
                className={classes.formBtn}
                endIcon={
                  <SendIcon style={{ fontSize: '35px', color: 'white' }} />
                }
                variant='contained'
                color='secondary'>
                <Typography variant='h3'>
                  {!status.submitting
                    ? !status.submitted
                      ? 'Submit'
                      : 'Submitted'
                    : 'Submitting...'}
                </Typography>
              </Button>
            </Grid>
          </form>
        </Grid>
      </RenderOnSight>
    </React.Fragment>
  );
};

export default Contact;

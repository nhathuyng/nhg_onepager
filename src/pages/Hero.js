import React from 'react';
import {
  Typography,
  AppBar,
  Toolbar,
  Grid,
  Button,
  IconButton,
  Link,
} from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import { makeStyles } from '@material-ui/core/styles';
import MenuDropdown from './components/MenuDropdown';
import Typist from 'react-typist';
import { Link as ScrollLink } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: 'none',
  },
  grid: {
    // height: '95vh',
    // [theme.breakpoints.down('sm')]: {
    //   height: '70vh',
    //   marginBottom: '25vh',
    // },
  },
  toolBar: {
    position: 'absolute',
    top: 0,
    right: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    margin: '2rem 2.5rem',
  },
  hireButton: {
    paddingLeft: '2rem',
  },
  typist: {
    display: 'inline',
  },
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Hero = () => {
  const classes = useStyles();

  const getNav = () => {
    return (
      <AppBar className={classes.appBar} position='static' color='transparent'>
        <Toolbar className={classes.toolBar}>
          <MenuDropdown />
          <Button className={classes.hireButton} disableRipple>
            <ScrollLink to='contact' spy={true} smooth={true} duration={600}>
              <Typography variant='h4'>hire</Typography>
            </ScrollLink>
          </Button>
          <Link href='https://github.com/nhathuyng' target='_blank'>
            <IconButton>
              <GitHubIcon style={{ fontSize: '35px', color: 'white' }} />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    );
  };
  const getHeroContent = () => {
    return (
      <Grid
        className={classes.grid}
        justify='center'
        alignItems='center'
        container
        direction='column'>
        <Grid item className={classes.gridContent}>
          <Typography align='center' variant='h1'>
            Nhat Huy Nguyen
          </Typography>
          <Typography align='center' variant='h3'>
            <Typist className={classes.typist} cursor={{ element: '' }}>
              &#123; <Typist.Delay ms={800} />
              ...allrounder
            </Typist>{' '}
            &#125;
          </Typography>
          <Typography display='block' align='center' variant='caption'>
            {'"Anythin\' for money"'.toUpperCase()}
          </Typography>
        </Grid>
      </Grid>
    );
  };

  return (
    <div className={classes.container}>
      {getNav()}
      {getHeroContent()}
    </div>
  );
};

export default Hero;

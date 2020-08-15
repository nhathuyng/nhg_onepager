import React from 'react';
import { BottomNavigation, Typography, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  nav: {
    background: 'rgba(255,255,255, 0.1)',
    display: 'flex',
    height: '8rem',
  },
  root: {
    '& .MuiIcon-root': {
      margin: '0 3rem',
    },
    '& .MuiTypography-h3': {
      margin: '3rem 2rem',
    },
  },
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <BottomNavigation className={classes.nav}>
        <Typography variant='h3'>
          <Icon>
            <img
              alt='logo'
              width='25'
              src='https://ik.imagekit.io/ihqypb274v/OnePager_Logos/figma-1_HTx4ALzyi.svg'
            />
          </Icon>
          <Icon>
            <img
              alt='logo'
              width='40'
              src='https://ik.imagekit.io/ihqypb274v/OnePager_Logos/react-2_PAec0xiFFG7.svg'
            />
          </Icon>{' '}
          <Icon>
            <img
              alt='logo'
              width='42'
              src='https://ik.imagekit.io/ihqypb274v/OnePager_Logos/material-ui_-fq8p14G5QWt.svg'
            />
          </Icon>
        </Typography>
      </BottomNavigation>
      <BottomNavigation className={classes.nav}>
        <Typography variant='h3'>Imprint</Typography>
        <Typography variant='h3'>Privacy</Typography>
      </BottomNavigation>
    </div>
  );
};

export default Footer;

import React from 'react';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: '2.5%',
    right: '2.5%',
  },
}));

export const BackToHeroButton = () => {
  const classes = useStyles();
  return (
    <IconButton className={classes.root}>
      <Link to='hero' spy={true} smooth={true} duration={600}>
        <ArrowUpwardIcon style={{ fontSize: '50px', color: 'white' }} />
      </Link>
    </IconButton>
  );
};

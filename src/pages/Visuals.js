import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { videos } from '../media/videos';

const useStyles = makeStyles((theme) => ({
  heading: {
    height: '5vh',
    paddingTop: '2rem',
  },
  visualsSection: {
    minHeight: '95vh',
    paddingTop: '10rem',
    marginBottom: '8rem',
  },
  cardMedia: {
    maxWidth: '350px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
}));

const Visuals = () => {
  const classes = useStyles();
  const VisualCard = ({ video }) => {
    return (
      <Grid justify='center' xs={12} md={6} lg={4} container item>
        <Grid item>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              component='video'
              type='video/mp4'
              image={video}
              controls
            />
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography align='center' variant='h2'>
          {'visuals'.toUpperCase()}
        </Typography>
        <Typography align='center' variant='h3'>
          [mainly made with Photoshop]
        </Typography>
      </div>

      <Grid
        justify='space-between'
        alignItems='center'
        className={classes.visualsSection}
        container
        item>
        {videos.map(({ video }, index) => (
          <VisualCard key={index} video={video} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Visuals;

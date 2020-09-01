import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
} from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import { makeStyles } from '@material-ui/core/styles';
import { videos } from '../media/videos';
import RenderOnSight from './components/RenderOnSight';

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
      <RenderOnSight>
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
          {videos.map(({ video }, index) =>
            video ? (
              <VisualCard key={index} video={video} />
            ) : (
              <Skeleton variant='rect' width={210} height={118} />
            )
          )}
        </Grid>
      </RenderOnSight>
    </React.Fragment>
  );
};

export default Visuals;

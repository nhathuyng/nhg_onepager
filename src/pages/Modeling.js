import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Button,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { models } from '../media/images/models';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const useStyles = makeStyles((theme) => ({
  heading: {
    height: '5vh',
    paddingTop: '2rem',
  },
  modelSection: {
    minHeight: '95vh',
    paddingTop: '10rem',
  },
  cardMedia: {
    maxWidth: '350px',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  modelBtn: {
    marginBottom: '12rem',
  },
}));

const Modeling = () => {
  const classes = useStyles();
  const ModelCard = ({ model }) => {
    return (
      <Grid justify='center' xs={12} md={6} lg={4} container item>
        <Grid item>
          <Card>
            <CardMedia
              className={classes.cardMedia}
              component='img'
              alt='model'
              image={model}
              title='model'
            />
            <CardContent>
              <Typography
                align='center'
                style={{ color: '#1E1E1E', fontSize: '1.5rem' }}
                variant='h5'>
                me - par exellence
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  };

  return (
    <React.Fragment>
      <div className={classes.heading}>
        <Typography align='center' variant='h2'>
          {'modeling'.toUpperCase()}
        </Typography>
        <Typography align='center' variant='h3'>
          [me - unable to smile]
        </Typography>
      </div>
      <Grid
        justify='space-between'
        alignItems='center'
        className={classes.modelSection}
        container
        item>
        {models.map(({ model }, index) => (
          <ModelCard key={index} model={model} />
        ))}
      </Grid>
      <Typography align='center' variant='h5'>
        <Link
          underline='none'
          target='_blank'
          href='https://www.everydaypeople.de/maenner/item/huy-n'>
          <Button
            variant='outlined'
            className={classes.modelBtn}
            color='secondary'
            endIcon={<ArrowRightIcon style={{ marginTop: '0.425rem' }} />}>
            <Typography align='center' variant='h5'>
              {'everydaypeople.de'.toUpperCase()}
            </Typography>
          </Button>
        </Link>
      </Typography>
    </React.Fragment>
  );
};

export default Modeling;

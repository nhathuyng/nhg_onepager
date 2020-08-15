import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardContent,
  IconButton,
  Link,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { projects } from '../media/projects';

const useStyles = makeStyles((theme) => ({
  heading: {
    height: '5vh',
    paddingTop: '2rem',
  },
  projectSection: {
    minHeight: '95vh',
    marginBottom: '8rem',
    paddingTop: '10rem',
  },
  frame: {
    height: '45vh',
    width: '100%',
  },
  title: {
    color: '#000',
    '&:hover': {
      color: '#000',
    },
  },
  cardContent: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {},
}));

const Projects = () => {
  const classes = useStyles();
  const ProjectCard = ({ project: { link, title } }) => {
    return (
      <Grid justify='center' xs={12} md={6} lg={4} container item>
        <Grid item>
          <Card>
            <iframe
              className={classes.frame}
              title='dummy'
              src={link}
              name='myFrame'></iframe>
            <CardContent className={classes.cardContent}>
              <Typography className={classes.title} variant='h5'>
                {title}
              </Typography>
              <Link href={link} target='_blank'>
                <IconButton>
                  <OpenInNewIcon className={classes.icon} />
                </IconButton>
              </Link>
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
          {'projects'.toUpperCase()}
        </Typography>
        <Typography align='center' variant='h3'>
          [mainly build with React,Typescript & Material UI]
        </Typography>
      </div>

      <Grid
        justify='space-between'
        alignItems='center'
        className={classes.projectSection}
        container
        item>
        {projects.map((project) => (
          <ProjectCard project={project} />
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Projects;

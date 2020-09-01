import React from 'react';
import { Grid } from '@material-ui/core';
import Hero from './pages/Hero';
import Projects from './pages/Projects';
import Visuals from './pages/Visuals';
import Modeling from './pages/Modeling';
import Audio from './pages/Audio';
import Contact from './pages/Contact';
import Footer from './pages/components/Footer';
import ScrollBar from './pages/components/ScrollIndicator';
import { Element } from 'react-scroll';
import { BackToHeroButton } from './pages/components/BackToHeroButton';

function App() {
  return (
    <>
      <Element name='hero'>
        <Grid container>
          <Grid item xs={false} md={1} xl={2} />
          <Grid item xs={12} md={10} xl={8}>
            <ScrollBar />

            <Hero />

            <Element name='projects'>
              <Projects />
            </Element>
            <Element name='visuals'>
              <Visuals />
            </Element>
            <Element name='modeling'>
              <Modeling />
            </Element>
            <Element name='audio'>
              <Audio />
            </Element>
            <Element name='contact'>
              <Contact />
            </Element>

            <BackToHeroButton />
          </Grid>
          <Grid item xs={false} md={1} xl={2} />
        </Grid>
      </Element>
      <Footer />
    </>
  );
}

export default App;

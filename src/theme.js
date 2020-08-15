import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    secondary: {
      main: '#6BE233',
    },
  },
  shape: {
    borderRadius: 0,
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
    h1: {
      fontSize: '8rem',
      fontWeight: '400',
      marginBottom: '0.5rem',
    },
    h2: {
      fontWeight: '600',
      fontSize: '4rem',
    },
    h3: {
      fontWeight: '300',
      fontSize: '2rem',
    },
    h4: {
      fontSize: '2.5rem',
      fontWeight: '600',
      letterSpacing: '0.3rem',
    },
    h5: {
      textTransform: 'uppercase',
      fontSize: '2.5rem',
      fontWeight: '200',
      paddingTop: '0.35rem',
    },
    h6: {
      fontWeight: '500',
      '&:hover': {
        color: '#6BE233',
      },
    },
  },
  overrides: {
    MuiTypography: {
      root: {
        color: 'white',
      },
    },
    MuiGrid: {
      root: {
        padding: '1rem',
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
      },
    },
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
});

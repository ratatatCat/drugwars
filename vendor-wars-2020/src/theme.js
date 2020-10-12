import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4dd0e1',
    },
    primary2: {
      main: '#b2ebf2',
    },
    secondary: {
      main: '#ffecb3',
    },
    accent: {
      main: '#ff80ab',
    },
    accent2: {
      main: '#3f51b5',
    },
    background: {
      default: 'rgba(0, 151, 167, 0.95)',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        // Some CSS
        color: 'white',
      },
      contained: {
        width: '200px',
        height: '30px',
      },
    },
  },
});

export default theme;

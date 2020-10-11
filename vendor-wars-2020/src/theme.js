import { createMuiTheme } from '@material-ui/core/styles';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#4dd0e1',
    },
    secondary: {
      main: '#ffecb3',
    },
    accent: {
      main: '#f8bbd0',
    },
    background: {
      default: '#b2ebf2',
    },
  },
  overrides: {
    // Style sheet name ⚛️
    MuiButton: {
      root: {
        // Some CSS
        color: 'white',
      },
    },
  },
});

export default theme;

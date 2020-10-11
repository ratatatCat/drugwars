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
      main: '#ff4081',
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

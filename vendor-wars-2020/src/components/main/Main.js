import React from 'react';
import Status from './Status/status';
import { Travel, CurrentLoc } from './Travel/travel';
import Events from './events/Events';
import Knockoffs from './knockoffs/Knockoffs';
import Actions from './actions/Actions';
import Bag from './bag/Bag';

import Container from '@material-ui/core/Container';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing.unit,
    width: '200px',
    color: 'white',
  },
  link: {
    textDecoration: 'none',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
  },
  small: {
    flex: '1',
  },
  large: {
    flex: '3',
  },
}));

function Main(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.section}>
        <Status />
        <CurrentLoc />
        <Travel />
      </div>
      <div>
        <Events />
      </div>
      <div>
        <Knockoffs />
        <Actions />
        <Bag />
      </div>
    </Container>
  );
}

export default Main;

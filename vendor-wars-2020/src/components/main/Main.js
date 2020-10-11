import React, { useState } from 'react';

import Status from './Status/status';
import { Travel, CurrentLoc } from './Travel/travel';
import Events from './Events/events';
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
}));

function Main(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [location, setLocation] = useState();
  const [src, setSrc] = useState();

  return (
    <Container component="main" maxWidth="lg">
      <div className={classes.section}>
        <Status />
        <CurrentLoc location={location} src={src} />
        <Travel setLocation={setLocation} setSrc={setSrc} />
      </div>
      <div className={classes.section}>
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

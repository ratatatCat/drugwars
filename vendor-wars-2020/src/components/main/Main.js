import React, { useState } from 'react';

import Status from './Status/status';
import { Travel, CurrentLoc } from './Travel/travel';
import Events from './Events/events';
import Knockoffs from './Knockoffs/knockoffs';
import Actions from './Actions/actions';
import Bag from './Bag/bag';

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
    <Container
      component="main"
      maxWidth="lg"
      style={{
        background: theme.palette.primary.main,
        height: '100vh',
      }}
    >
      <div className={classes.section}>
        <Status />
        <CurrentLoc location={location} src={src} />
        <Travel setLocation={setLocation} setSrc={setSrc} />
      </div>
      <div className={classes.section}>
        <Events />
      </div>
      <div className={classes.section}>
        <Knockoffs />
        <Actions />
        <Bag />
      </div>
    </Container>
  );
}

export default Main;

import React, { useState } from 'react';

import Status from './Status/status';
import { Travel, CurrentLoc } from './Travel/travel';
import Events from './Events/events';
import Knockoffs from './Knockoffs/knockoffs';
import Actions from './Actions/actions';
import Bag from './Bag/bag';
import SignOutButton from '../Auth/SignOut';

import Container from '@material-ui/core/Container';
import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(),
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
  main: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

function Main(props) {
  const classes = useStyles(props);
  const theme = useTheme();
  const [location, setLocation] = useState();
  const [src, setSrc] = useState();
  const [dayNum, setDayNum] = useState(1);

  return (
    <div className={classes.main}>
      <SignOutButton />
      <Container
        component="main"
        maxWidth="lg"
        style={{
          background: theme.palette.primary.main,
          height: '100vh',
          margin: 0,
        }}
      >
        <div className={classes.section}>
          <Status dayNum={dayNum} />
          <CurrentLoc location={location} src={src} />
          <Travel
            setLocation={setLocation}
            setSrc={setSrc}
            dayNum={dayNum}
            setDayNum={setDayNum}
          />
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
      <div style={{ flex: '1' }} />
    </div>
  );
}

export default Main;

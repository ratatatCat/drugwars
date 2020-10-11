import React, { useState } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  currentLoc: {
    flex: '1',
  },
  travel: {
    flex: '3',
    display: 'flex',
    flexDirection: 'column',
  },
}));

function CurrentLoc(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.currentLoc}>
      <h1>Kansas City, MO</h1>
      <h2>Uber</h2>
    </div>
  );
}

function Travel(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.travel}>
      <div>
        {' '}
        <button>Northtown</button>
        <button>Plaza</button>
        <button>Downtown</button>
        <button>Westport</button>
      </div>
      <div>
        {' '}
        <button>Brookside</button>
        <button>Martin City</button>
        <button>Independence</button>
        <button>JOCO</button>
      </div>
    </div>
  );
}

export { Travel, CurrentLoc };

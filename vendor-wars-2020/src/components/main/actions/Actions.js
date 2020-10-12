import React, { useState } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  actions: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonPrimary: {
    color: theme.palette.primary.main,
    marginBottom: '12px',
    marginRight: '12px',
    background: theme.palette.accent2.main,
  },
  buttonSecondary: {
    color: theme.palette.secondary.main,
    marginBottom: '12px',
    marginRight: '12px',
    background: theme.palette.accent.main,
  },
  currentLoc: {
    flex: '1',
    textAlign: 'center',
  },
  hidden: {
    display: 'none',
  },
  icon: {
    marginRight: '5px',
  },
  photo: {
    height: '200px',
    width: '200px',
  },
}));

function Actions(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div style={{ flex: '1' }}>
      <h2>Actions</h2>
      <div className={classes.actions}>
        <div style={{ flex: '1', paddingTop: '15px' }}>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
          >
            Dump
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
          >
            Buy
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
          >
            Sell
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
          >
            Price History
          </Button>
        </div>
        <div style={{ flex: '1', paddingTop: '15px' }}>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
          >
            Finances
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
          >
            Store
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
          >
            Health
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
          >
            New Game
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Actions;

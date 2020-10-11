import React, { useState } from 'react';

import { useTheme, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import LocalTaxiIcon from '@material-ui/icons/LocalTaxi';

const useStyles = makeStyles((theme) => ({
  buttonPrimary: {
    color: theme.palette.primary.main,
    marginBottom: '12px',
    marginRight: '12px',
    background: theme.palette.accent.main,
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
  icon: {
    marginRight: '5px',
  },
  travel: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
}));

function onClick(button, props) {
  props.setLocation(button.target.valueOf().innerText);
}

function CurrentLoc(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div className={classes.currentLoc}>
      <h1>Kansas City, MO</h1>
      <h2>{props.location}</h2>
      <h2>Picture of Place Here</h2>
    </div>
  );
}

function Travel(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <div style={{ flex: '2' }}>
      <h2>Travel To</h2>
      <div className={classes.travel}>
        <div style={{ flex: '1', paddingTop: '15px' }}>
          {' '}
          <Button
            variant="contained"
            className={classes.buttonPrimary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Northtown
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Plaza
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Downtown
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Westport
          </Button>
        </div>
        <div style={{ flex: '1', paddingTop: '15px' }}>
          {' '}
          <Button
            variant="contained"
            className={classes.buttonSecondary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Brookside
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Martin City
          </Button>
          <Button
            variant="contained"
            className={classes.buttonSecondary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            Independence
          </Button>
          <Button
            variant="contained"
            className={classes.buttonPrimary}
            onClick={(button) => {
              onClick(button, props);
            }}
          >
            <LocalTaxiIcon className={classes.icon} />
            JOCO
          </Button>
        </div>
      </div>
    </div>
  );
}

export { Travel, CurrentLoc };

import React, { useState } from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { compose } from 'recompose';
import { withAuthorization } from '../auth/Session';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { Icon } from '@material-ui/core';
import VendorMan from '../../vendor_man.svg';

import { useTheme, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing.unit,
    width: '200px',
    color: 'white',
    background: theme.palette.accent.main,
  },
  icon: {
    width: '100px',
    height: '100px',
    paddingTop: '30px',
  },
  link: {
    textDecoration: 'none',
  },
  buttonArea: {
    display: 'inline-block',
    alignItems: 'center',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  title: {
    fontSize: '80px',
    fontFamily: 'Palatino Linotype',
  },
}));

function HomePage(props) {
  const classes = useStyles(props);
  const theme = useTheme();

  return (
    <Container className={classes.container}>
      <CssBaseline />
      <Icon className={classes.icon}>
        <img
          src={VendorMan}
          color="primary"
          height={100}
          width={100}
        />
      </Icon>
      <h1 className={classes.title}>Street Vendor Wars</h1>
      <div className={classes.buttonArea}>
        <Link to={ROUTES.MAIN} className={classes.link}>
          <Button
            variant="contained"
            className={classes.button}
            style={{ background: theme.palette.primary.main }}
          >
            New Game
          </Button>
        </Link>
        <Link to={ROUTES.MAIN} className={classes.link}>
          <Button variant="contained" className={classes.button}>
            Continue
          </Button>
        </Link>
      </div>
    </Container>
  );
}

const condition = (authUser) => !!authUser;

export default compose(withAuthorization(condition))(HomePage);

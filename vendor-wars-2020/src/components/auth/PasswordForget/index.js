import React, { Component } from 'react';

import { withFirebase } from '../../Firebase';
import { withRouter, Link } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
});

const PasswordForgetPage = () => (
  <div>
    <PasswordForgetForm />
  </div>
);

const INITIAL_STATE = {
  email: '',
  error: null,
};

class PasswordForgetFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email } = this.state;

    this.props.firebase
      .doPasswordReset(email)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, error } = this.state;

    const isInvalid = email === '';

    return (
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={styles.paper}>
          <Typography component="h1" variant="h5">
            Forget Password
          </Typography>
          <form
            className={styles.form}
            noValidate
            onSubmit={this.onSubmit}
          >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={this.onChange}
              value={this.state.email}
            />
            <Button
              type="submit"
              variant="contained"
              color="secondary"
              className={styles.submit}
              disabled={isInvalid}
              fullWidth
              type="submit"
            >
              {' '}
              Reset My Password
            </Button>
            {error && <p>{error.message}</p>}
          </form>
        </div>
      </Container>
    );
  }
}

const PasswordForgetLink = () => (
  <Link
    to={ROUTES.PASSWORD_FORGET}
    style={{ textDecoration: 'none' }}
  >
    <Button
      type="text"
      color="primary"
      style={{ justifyContent: 'left' }}
    >
      Forgot Password?
    </Button>
  </Link>
);

export default PasswordForgetPage;

const PasswordForgetForm = withFirebase(PasswordForgetFormBase);

export { PasswordForgetForm, PasswordForgetLink };

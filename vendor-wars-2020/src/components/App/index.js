import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import SignUpPage from '../Auth/SignUp';
import SignInPage from '../Auth/SignIn';
import PasswordForgetPage from '../Auth/PasswordForget';
import Main from '../Main/main';
import { withAuthentication, AuthUserContext } from '../Auth/Session';

import * as ROUTES from '../../constants/routes';

import HomePage from '../Home/home';

import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from '../../theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <div>
        <AuthUserContext.Consumer>
          {(authUser) =>
            authUser ? (
              <Redirect to={ROUTES.SIGN_IN} authUser={authUser} />
            ) : (
              <Redirect to={ROUTES.HOME} />
            )
          }
        </AuthUserContext.Consumer>

        <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
        <Route path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route
          path={ROUTES.PASSWORD_FORGET}
          component={PasswordForgetPage}
        />
        <Route path={ROUTES.HOME} component={HomePage} />
        <Route path={ROUTES.MAIN} component={Main} />
      </div>
    </Router>
  </ThemeProvider>
);

export default withAuthentication(App);

import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router';

import SignUpPage from '../auth/SignUp';
import SignInPage from '../auth/SignIn';
import PasswordForgetPage from '../auth/PasswordForget';
import { withAuthentication, AuthUserContext } from '../auth/Session';
import { Link } from 'react-router-dom';

import SignOutButton from '../auth/SignOut';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

import HomePage from '../Home';

const App = () => (
  <Router>
    <div>
        <AuthUserContext.Consumer>
        {authUser =>
          authUser ? (
            <Redirect to={ROUTES.SIGN_IN} authUser={authUser} />
          ) : (
            <Redirect to={ROUTES.HOME} />
          )
        }
      </AuthUserContext.Consumer>

      <hr />

      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route
        path={ROUTES.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
      <Route path={ROUTES.HOME} component={HomePage} />
    </div>
  </Router>
);

export default withAuthentication(App);

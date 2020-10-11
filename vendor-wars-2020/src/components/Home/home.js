import React, { useState } from "react";
import "./home.css";
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';

import { compose } from 'recompose';

import { withAuthorization } from '../auth/Session';

function HomePage() {
  return (
    <div className="Intro">
      <Link to={ROUTES.MAIN}>
        <button>New Game</button>
      </Link>
      <button>Continue</button>
    </div>
  );
}

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(HomePage);

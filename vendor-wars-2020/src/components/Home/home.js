import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";

import { compose } from 'recompose';

import { withAuthorization } from '../auth/Session';

function HomePage() {
  let history = useHistory();

  return (
    <div className="Intro">
      <button onClick={() => history.push("/main")}>New Game</button>
      <button>Continue</button>
    </div>
  );
}

const condition = authUser => !!authUser;

export default compose(
  withAuthorization(condition),
)(HomePage);

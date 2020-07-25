import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./Intro.css";

function Intro() {
  let history = useHistory();

  return (
    <div className="Intro">
      <button onClick={() => history.push("/main")}>New Game</button>
      <button>Continue</button>
    </div>
  );
}

export default Intro;

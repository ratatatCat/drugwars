import React from 'react';
import './Intro.css';

function Intro() {
  return (
    <div className="Intro">
      <button onClick={() => startNewGame()}>New Game</button>
      <button>Continue</button>
    </div>
  );
}

function startNewGame(e) {
  this.setState(state => ({
    show: false
  }));
}

export default Intro;

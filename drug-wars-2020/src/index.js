import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Intro from './intro/Intro';
import Main from './main/Main';

function Index(props) {
  const isIntro = props.isIntro;

  if (isIntro) {
    return <Intro />
  }
  return <Main />
}

ReactDOM.render(
  <React.StrictMode>
    <header className="Intro-header">Drug Wars 2020</header>
    <Index isIntro={true} />
  </React.StrictMode>,
  document.getElementById('root')
);

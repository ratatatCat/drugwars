import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Intro from "./intro/Intro";
import Main from "./main/Main";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact path="/" component={Intro} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);

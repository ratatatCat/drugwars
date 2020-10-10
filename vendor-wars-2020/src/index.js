import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Intro from "./components/intro/Intro";
import Main from "./components/main/Main";
import * as ROUTES from "./constants/routes";

ReactDOM.render(
  <div>
    <Router>
      <Switch>
        <Route exact path={ROUTES.LANDING} component={Intro} />
        <Route path="/main" component={Main} />
      </Switch>
    </Router>
  </div>,
  document.getElementById("root")
);

import React from "react";
import "./Main.css";
import Status from "./status/Status";
import Travel from "./travel/Travel";
import Events from "./events/Events";
import Knockoffs from "./knockoffs/Knockoffs";
import Actions from "./actions/Actions";
import Bag from "./bag/Bag";

function Main() {
  return (
    <div className="Main">
      <div className="Section">
        <Status className="Action" />
        <Travel className="Action" />
      </div>
      <div className="Section">
        <Events />
      </div>
      <div className="Section">
        <Knockoffs className="Action" />
        <Actions className="Action" />
        <Bag className="Action" />
      </div>
    </div>
  );
}

export default Main;

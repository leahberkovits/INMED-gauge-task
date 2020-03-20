import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import GeneralScale from './GeneralScale';
import AllScales from './AllScales';


export default function route() {
  return (
    <Router>
      <div>

        <Switch>
          <Route path="/generalScale">
            <GeneralScale />
          </Route>

          <Route path="/allScales">
            <AllScales />
          </Route>

          <Route path="/">
            <GeneralScale />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


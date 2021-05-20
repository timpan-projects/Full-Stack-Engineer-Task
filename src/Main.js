import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";

import Insert from "./Insert";
import View from "./View";

class Main extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <h1>Tim Pan - Full-Stack Engineer (Task)</h1>
          </div>
          <ul>
            <li><NavLink to="/">Register new user</NavLink></li>
            <li><NavLink to="/view">View most recent record</NavLink></li>
          </ul>
          <div>
            <Route exact path="/" component={Insert}/>
            <Route path="/view" component={View}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;
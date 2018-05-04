import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";

import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
        </Switch>
      </div>
    );
  }
}

export default App;


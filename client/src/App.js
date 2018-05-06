import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchCurrentUser } from './store/actions/index';

import Landing from './containers/Landing';
import Login from './components/Login';
import Signup from './components/Signup';

class App extends Component {

  componentDidMount(){
    this.props.fetchCurrentUser();
  }

  render() {

    console.log(this.props.auth)
    
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


const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchCurrentUser }, dispatch)
)

const mapStateToProps = (state, ownProps) => ({
  auth: state.auth
})


export default connect(mapStateToProps, mapDispatchToProps)(App);


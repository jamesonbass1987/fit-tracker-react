import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { fetchUser } from './store/actions/index';

import Landing from './containers/Landing';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Logout from './components/Auth/Logout';
import Navbar from './components/Navbar/Navbar';

class App extends Component {

  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <Navbar />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
              <Route exact path="/logout" component={Logout} />
            </Switch>
          </div>
        </BrowserRouter>
      </div>  
    );
  }
}


const mapDispatchToProps = dispatch => (
  bindActionCreators({ fetchUser }, dispatch)
)

export default connect(null, mapDispatchToProps)(App);


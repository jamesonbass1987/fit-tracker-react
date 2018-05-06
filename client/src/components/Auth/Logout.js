import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { handleLogout } from '../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.handleLogout();
    }

    render() {
        return <Redirect to="/" />;
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogout }, dispatch)
)

export default connect(null, mapDispatchToProps)(Logout);
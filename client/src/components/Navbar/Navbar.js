import React, { Component } from 'react';
import NavLink from './NavLink';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { handleLogout } from '../../store/actions/index';

class Navbar extends Component {
    
    renderLinks(){
        const links = [<NavLink key="home" to="/" title="Home" />]

        if(this.props.auth.currentUser){
            links.push(<NavLink key="logout" to="/logout" title="Logout" />)
        } else {
            links.push(<NavLink key="login" to="/login" title="Login" />,
                        <NavLink key="signup" to="/signup" title="Signup" />)
        }
        return links;
    }



    render() {
        console.log(this.props.auth)
        return (
            <ul>
                {this.renderLinks()}
             </ul>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogout }, dispatch)
)

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
})



export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
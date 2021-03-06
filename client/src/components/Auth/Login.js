import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from "react-router-dom";
import { bindActionCreators } from 'redux';
import { handleLogin } from '../../store/actions/index';

class Login extends Component {

    constructor(){
        super();

        this.state = {
            formData: {
                username: "",
                password: ""
            }
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(e){
        e.preventDefault();
        const { formData } = this.state;
        this.props.handleLogin(formData);
    }

    handleChange(e){
        this.setState({
            formData:{
                ...this.state.formData,
                [e.target.name]: e.target.value
            }
        });
    }

    renderForm(){
        if (this.props.auth.currentUser){
            return <Redirect to="/" />
        } else {

            return (
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username</label>
                        <input type='text' name="username" value={this.state.username} onChange={this.handleChange} />
                    </div>

                    <div>
                        <label>Password</label>
                        <input type='password' name="password" value={this.state.password} onChange={this.handleChange} />
                    </div>

                    <input type="submit" value="Submit" />
                </form>
            )
        }
    }

    render() {

        console.log(this.props.auth.currentUser)

        return (
            <div>
                Login Form
                {this.renderForm()}
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => (
    bindActionCreators({ handleLogin }, dispatch)
)

const mapStateToProps = (state, ownProps) => ({
    auth: state.auth
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
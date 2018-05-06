import * as actionTypes from "./actionTypes";
import axios from "axios";

export const handleLogin = payload => dispatch => {

    const { username, password } = payload;

    axios.post('http://localhost:4000/api/auth/login', { username, password })
        .then(res => {
            
            localStorage.setItem("token", res.data.token);
            console.log('in action', res.data)
            dispatch({
                type: actionTypes.FETCH_CURRENT_USER,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
        });
}

export const parseToken = token => {
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        return JSON.parse(payload);
    } else {
        return null;
    }
}

export const fetchUser = () => dispatch => {
    const token = localStorage.getItem('token');
    let user;

    if (token) {
        user = parseToken(token);
    }
    
    dispatch({
        type: actionTypes.FETCH_CURRENT_USER,
        payload: { token, user }
    });
};



export const isLoggedIn = () => {
    const token = localStorage.getItem('token');
    const user = parseToken(token);

    if (user) {
        return user.exp > Date.now() / 1000;
    } else {
        return false;
    }
}

export const handleLogout = () => dispatch => {

    localStorage.removeItem('token');

    dispatch({
        type: actionTypes.REMOVE_CURRENT_USER
    })
}
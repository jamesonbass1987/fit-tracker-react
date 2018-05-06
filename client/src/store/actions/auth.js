import * as actionTypes from "./actionTypes";
import axios from "axios";

export const fetchCurrentUser = () => async dispatch => {
    let token;

    if (isLoggedIn()){
        token = await getUserToken();
    }


    dispatch({
        type: actionTypes.FETCH_CURRENT_USER,
        payload: token
    });
};

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

export const getUserToken = () => {
    const token = localStorage.getItem('token');
    let payload;

    if (token) {
        payload = token.split('.')[1];
        payload = window.atob(payload);
        return JSON.parse(payload);
    } else {
        return null;
    }
}

export const isLoggedIn = () => {
    const user = getUserToken();

    if (user) {
        return user.exp > Date.now() / 1000;
    } else {
        return false;
    }
}
import React from 'react';
import { Link } from 'react-router-dom';

const navLink = props => {
    return (
        <li>
            <Link to={props.to}>{props.title}</Link>
        </li>
    );
};


export default navLink;
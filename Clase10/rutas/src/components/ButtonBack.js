import React from 'react';
import { Link } from 'react-router-dom';

const ButtonBack = () => {
    return ( 
        <Link className="button is-info" to="/">Home</Link>
    );
}
 
export default ButtonBack;
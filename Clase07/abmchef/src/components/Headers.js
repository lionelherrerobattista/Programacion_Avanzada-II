import React from 'react';
import logo from '../assets/logo.png';

const Header = ({title}) => {
    return ( 
        <header>
            <img src={logo} alt={title}/>
            <h1>{title}</h1>
        </header>
        
     );
}
 
export default Header;
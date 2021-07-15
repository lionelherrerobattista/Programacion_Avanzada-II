import React from 'react';
import logo from '../assets/logo.png'

const Header = ({children}) => {

    let style = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "1rem",
        background: "bisque",
    }
    
    return ( 
        <header style={style}>
            <img style={{height: "200px"}} src={logo} alt="logo movie"></img>
            <h1 className="title">{children}</h1>
        </header>
     );
}
 
export default Header;
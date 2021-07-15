import React from 'react';
import logo from '../assets/pokelogo.png';
import BotonNext from './BotonNext';
import BotonPrev from './BotonPrev';

const Header = ({title, handlerNext, handlerPrev}) => {
    return ( 
        <header>
            <img src={logo} alt="logo pokemon"></img>
            <h1>{title}</h1>
            <div className="container-nav">
                <BotonPrev handlerClick={handlerPrev} />
                <BotonNext handlerClick={handlerNext} />
            </div>
        </header>
     );
}
 
export default Header;
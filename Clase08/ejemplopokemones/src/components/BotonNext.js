import React from 'react';
import icono from '../assets/next.png';

const BotonNext = ({handlerClick}) => {
    return ( 
        <div className="btn">
            <button onClick={handlerClick} >
                <img src={icono} alt="flecha"/>
            </button>
        </div>
     );
}
 
export default BotonNext;
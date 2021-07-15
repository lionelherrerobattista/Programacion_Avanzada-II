import React from 'react';
import icono from '../assets/back.png';

const BotonPrev = ({handlerClick}) => {
    return ( 
        <div className="btn">
            <button onClick={handlerClick}>
                <img src={icono} alt="flecha"/>
            </button>
        </div>
     );
}
 
export default BotonPrev;
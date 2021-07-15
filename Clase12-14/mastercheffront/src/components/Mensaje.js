import React from 'react';

const Mensaje = ({children, bgColor = "blue", color}) => {

    const miEstilo = {
        textAlign: "center"
    }

    return ( 
        <div style={{...{backgroundColor:bgColor}, ...miEstilo}}>
            <h2 style={{color: color}}>{children}</h2>
        </div>
     );
}
 
export default Mensaje;
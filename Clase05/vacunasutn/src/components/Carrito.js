import React from 'react';
import Vacuna from './Vacuna';
import shortid from 'shortid';

const Carrito = ({titulo, setCarrito, carrito}) => {

    return ( 
        <div className="carrito">
            <h2>{titulo}</h2>
            {
                carrito.map(vac => 
                <Vacuna 
                    key={shortid.generate()} 
                    vacuna={vac}
                    setCarrito={setCarrito}
                    carrito={carrito}
                />)
            }
        </div>
            
        
     );
}
 
export default Carrito;
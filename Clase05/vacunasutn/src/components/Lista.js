import React from 'react';
import Vacuna from './Vacuna';

const Lista = ({titulo, vacunas, setCarrito, carrito}) => {

    return ( 
        <div className="lista">
            <h2>{titulo}</h2>
            {
                vacunas.map(vac => 
                <Vacuna 
                    key={vac.id} 
                    vacuna={vac}
                    setCarrito={setCarrito}
                    vacunas={vacunas}
                    carrito={carrito}
                />)
            }
        </div>
            
        
     );
}
 
export default Lista;
import React from 'react';
import { useLocation } from 'react-router';

const Productos = () => {

    //Obtener la query string:
    let {search} = useLocation();

    const params = new URLSearchParams(search);

    let id = params.get('id');
    let precio = params.get('precio');

  

    return ( 
        <div>
            <h1>Producto</h1>
        </div>
     );
}
 
export default Productos;
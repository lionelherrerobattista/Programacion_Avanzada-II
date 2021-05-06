import React from 'react';

const Vacuna = ({vacuna, setCarrito, vacunas, carrito}) => {
    
    const {id, marca, precio} = vacuna;

    const agregarVacuna = (id) => {
        console.log("Comprando... " + id );
        
        //Desestructuro el array
        //vacunas filter devuelve un array ... lo desestructuro
        setCarrito([...carrito, ...vacunas.filter(vacuna => vacuna.id === id)]);
    }

    const eliminarVacuna = (id) => {
        console.log("Eliminando... " + id);
        const index = carrito.findIndex(v => v.id === id);
        const aux = [...carrito];
        aux.splice(index, 1);
        setCarrito(aux)
    }

    return ( 
        <div>
            <h3>{marca}</h3>
            <p>
                <b>Precio:</b>${precio}
            </p>
            {
                vacunas?
                
                <button type="button" onClick={()=>{agregarVacuna(id)}}>Comprar</button>

                :

                <button type="button" onClick={()=>{eliminarVacuna(id)}}>Eliminar</button>

            }
        </div>
     );
}
 
export default Vacuna;
import React from 'react';

const Row = ({cocinero, handlerUpdate, handlerDelete}) => {
    const { id, nombre, especialidad, favorito, cantidadCapitulos } = cocinero;

    return ( 
        <tr>
            <td>{nombre}</td>
            <td>{especialidad}</td>
            <td>{favorito? "Sí" : "No"}</td>
            <td>{cantidadCapitulos}</td>
            <td>
                <button onClick={() => handlerUpdate(cocinero)}>Editar</button>
                <button onClick={() => handlerDelete(id)}>Eliminar</button>
            </td>
        </tr>
     );
}
 
export default Row;
import React from 'react';
import Row from './Row';

const Tabla = ({data, bajaCocinero, setEditado, modificarCocinero}) => {
    return ( 
        <div className="contenedor-tabla">
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Especialidad</th>
                        <th>Favorito</th>
                        <th>Cantidad de Capitulos</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                   {
                       data.length === 0? <tr><td colSpan="3">Sin Resultados</td></tr> : 
                       data.map(elemento => <Row key={elemento.id} cocinero={elemento} 
                        handlerUpdate={setEditado} handlerDelete={bajaCocinero} modificarCocinero={modificarCocinero}/>)
                   }
                </tbody>
            </table>
        </div>
     );
}
 
export default Tabla;
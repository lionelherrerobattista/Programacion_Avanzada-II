import React from 'react';
import { useParams } from 'react-router';

const Usuario = () => {

    let {nombre, edad, email} = useParams();

    return ( 
        <div>
            <h2>Datos del usuario</h2>
            <p>Nombre:<b>{nombre}</b></p>
            <p>Edad:<b>{edad}</b></p>
            <p>Email: <b>{email}</b></p>
        </div>
    );
}
 
export default Usuario;
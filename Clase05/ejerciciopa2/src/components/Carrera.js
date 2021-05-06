import React from 'react';

const Carrera = ({carrera}) => {
    let {nombre, materias} = carrera;

    return ( 
        <>
            <p>{nombre}: {materias}</p>
        </>
     );
}
 
export default Carrera;
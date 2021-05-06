import React from 'react';

const Total = ({carreras}) => {
    
    // let cantidadMaterias = 0;   
    // carreras.forEach(carrera => {
    //    cantidadMaterias += carrera.materias;
    // });
    
    return ( 
      <>
        {
            <p>Cantidad de materias: {carreras.reduce((ant, actual)=> ant + actual.materias, 0)}</p>
        }     
      </>
     );
  }
   
  export default Total;
import React from 'react';
import Carrera from './Carrera';

const  Content = ({carreras}) => {
    return ( 
      <>
      {
          carreras.map((carrera, index) => 
            <Carrera key={index} carrera={carrera}/>        
          )
      }
      </>
     );
  }
   
export default Content;
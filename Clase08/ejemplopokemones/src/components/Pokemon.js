import React from 'react';

const Pokemon = ({pokemon}) => {
    
    const {id, name, avatar} = pokemon;

    return ( 
        <figure>
            <img src={avatar} alt={`Imagen ${name}`}/>
            <figcaption>{name}</figcaption>
        </figure>
     );
}
 
export default Pokemon;
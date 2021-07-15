import React from 'react';
import Pokemon from './Pokemon';

const Listado = ({lista}) => {
    return ( 
        <div className="listado">
            {
                lista?.map( pokemon => <Pokemon key={pokemon.id} pokemon={pokemon}/>)
            }
        </div>
     );
}
 
export default Listado;
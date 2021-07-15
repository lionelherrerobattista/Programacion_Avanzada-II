import React, { useContext } from 'react';
import { CoctelesContext } from '../context/CoctelesContext';
import Drink from './Drink';

const ListDrinks = () => {

    const {resultados} = useContext(CoctelesContext);

    return ( 
        <div className="row mt-5">
            {
                resultados.map(drink => <Drink key={drink.idDrink}>{drink}</Drink>)
            }
        </div>
     );
}
 
export default ListDrinks;
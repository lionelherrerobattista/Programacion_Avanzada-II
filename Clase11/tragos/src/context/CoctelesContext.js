import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const CoctelesContext = createContext();

const CoctelesProvider = ({children}) => {

    const [flagBusqueda, setFlagBusqueda] = useState(false);
    const [resultados, setResultados] = useState([]);
    const [search, setSearch] = useState({ingrediente: "", categoria: ""});

    useEffect(()=>{
        const {ingrediente, categoria} = search;
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}&c=${categoria}`;
        
        const traerTragos = async () => {
            try {
                if(!flagBusqueda) return; //si no está el flag

                const respuesta = await axios.get(URL);

                // console.log(respuesta);
                setResultados(respuesta.data.drinks);
            } catch (error) {
                console.error(error);
            }
        }

        traerTragos();

    }, [search, flagBusqueda]) //hago la busqueda cuando cambie el search

    return(
        <CoctelesContext.Provider
        value={{
            setSearch,
            setFlagBusqueda,
            resultados,
        }}>
            {children}
        </CoctelesContext.Provider>
    )
}

export default CoctelesProvider;
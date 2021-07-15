import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

//Crear un contexto
export const CategoriasContext = createContext();

const CategoriasProvider = (props) => {

    const [categorias, setCategorias] = useState([]);

    useEffect(()=> {
        const URL = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"; //siempre incluir protocolo
        const traerCategorias = async () => {
            try {
                const respuesta = await axios.get(URL);
                //console.log(respuesta);
                setCategorias(respuesta.data.drinks);
            } catch (error) {
                console.error(error);
            }

        }

        traerCategorias();
    }, []); //se ejecuta una vez, se carga en componentDidMount()


    return(
        <CategoriasContext.Provider
        value = {{
            //Lo que quiero exponer de mi contexto
            categorias,
        }}
        >
            {props.children}
        </CategoriasContext.Provider>
    )
}

export default CategoriasProvider;
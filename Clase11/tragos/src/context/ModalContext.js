import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';

export const ModalContext = createContext();

const ModalProvider = ({children}) => {

    const [flagReceta, setFlagReceta] = useState(false);
    const [id, setId] = useState(null);
    const [receta, setReceta] = useState({});

    useEffect(()=> {
        const URL = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        const traerReceta = async () => {
            try {
                if(!flagReceta) return;
                const respuesta = await axios.get(URL);
                //console.log(respuesta);
                setReceta(respuesta.data.drinks[0]);

            }catch (error) {
                console.error(error);
            }
        }

        traerReceta();


    }, [id, flagReceta]);

    return(
        <ModalContext.Provider
        value={{
            setId,
            setReceta,
            setFlagReceta,
            receta,
        }}>
            {children}
        </ModalContext.Provider>
    )
}

export default ModalProvider;
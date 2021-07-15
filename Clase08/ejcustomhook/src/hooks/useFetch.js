import { useState, useEffect } from 'react';

//Lo uso para hacer peticiones
//3 variables de estado: dato, si lo recibí o no, el loading y si hubo error o no
export const useFetch = (url, dataInicial) => {
    const [data, setData] = useState(dataInicial);
    const [loading, setLoading] = useState(false); //bandera si recibi el dato o no
    const [error, setError] = useState(false);

    const getData = () => {
        setLoading(true); //espero la petición
        //se le podría pasar un options
        fetch(url) 
        .then(res => {
            return res.ok? res.json() : Promise.reject(res);
        })
        .then(res=> {
            setData(res); //guardo lo que pedí
            setLoading(false);
        })
        .catch(err => {
            setError(true);
            setLoading(false);
        });
    }

    useEffect(() => {
        getData(); 
    }, []);//consigo que se ejecute una sola vez

    return { data, loading, error}; //objeto - si tengo propiedad y valor con el mismo nombre lo escribo una sola vez
}
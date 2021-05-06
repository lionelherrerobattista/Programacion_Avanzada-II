import React, {useState} from 'react';

const ContadorFuncional = () => {

    const[ contador, setContador ] = useState(0);

    setInterval(() => {
        setContador(contador + 1)
    }, 1000);


    return(
        <>
            <h2>Soy un contador funcional</h2>
            <p>{contador}</p>
        </>
    );
}

export default ContadorFuncional;
import React from 'react';
import imagen from '../assets/notfound.jpg'
import ButtonBack from '../components/ButtonBack';

const Error404 = () => {
    return ( 
        <div style={{textAlign:"center"}}>
            <img src={imagen} alt="not found"></img>
            <ButtonBack />
        </div>
     );
}
 
export default Error404;
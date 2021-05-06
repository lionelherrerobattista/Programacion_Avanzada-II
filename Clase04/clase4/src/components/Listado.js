import React, {Component} from 'react';
import Estacion from "./Estacion";
import { v4 as uuidv4 } from 'uuid';

class Listado extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            estaciones: ["Verano", "Otoño", "Invierno", "Primavera"]
         }
    }
    render() { 
        return ( 
            <>
            <h1>Estaciones del año</h1>
            <ol>
                {
                    this.state.estaciones.map((estacion, index) => <Estacion key={uuidv4()} nombre={estacion} />)
                }
            </ol>
            </>
         );
    }
}
 
export default Listado;


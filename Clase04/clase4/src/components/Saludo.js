import React, {Component} from 'react';
import PropTypes from 'prop-types';

/*
componente funcional:
const Saludo = ({mensaje, numero, booleano, vec, funcion, componente}) => {
    
    return (
        <>
            <h2>Hola {mensaje}</h2>
            <h2>{numero}</h2>
            <h2>{booleano? "true" : "false"}</h2>
            <h2>{ vec.map(funcion) }</h2>
            <p>{componente} algo mas</p>
        </>
    )

}
export default Saludo;
*/

export default class Saludo extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <>
                <h2>Hola {this.props.mensaje}</h2>
                <h2>{this.props.numero}</h2>
                <h2>{this.props.booleano? "true" : "false"}</h2>
                <h2>{ this.props.vec.map(this.props.funcion) }</h2>
                <p>{this.props.componente} algo mas</p>
            </>
        )
    }
}

//propiedades por defecto
Saludo.defaultProps = {
    mensaje: "Nadie",
}

Saludo.propTypes = {
    numero: PropTypes.number.isRequired,
}
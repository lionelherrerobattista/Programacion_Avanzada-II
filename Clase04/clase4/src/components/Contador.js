import React, { Component } from 'react';

class Contador extends Component {

    constructor(props) {
        super(props);
            
        console.log("Constructor");

        this.state={
            hora: new Date().toLocaleTimeString(),
        }

        this.temporizador = null;

        //Enlazar el this para que se pueda usar el this en los métodos
        //con referencia a la clase
        this.iniciar = this.iniciar.bind(this);
        this.detener = this.detener.bind(this);
    }

    componentDidMount(){
        console.log("El componente ya está en el DOM");
    }

    componentDidUpdate(){
        console.log("Componente actualizado");
    }

    iniciar(e){
        console.log("Iniciar");
        //Guardo el interval para cortarlo después
        this.temporizador =  setInterval(()=> {
            this.setState({
                hora: new Date().toLocaleTimeString(),
            })
        }, 1000);
    }


    detener(e){
        console.log("Detener");
        clearInterval(this.temporizador);
    }

    render() {
        console.log("render");
        return(
            <>
                <h2>Soy un contador</h2>
                <p>{this.state.hora}</p>
                <button type="button" onClick={this.iniciar}>Iniciar</button>
                <button type="button" onClick={this.detener}>Detener</button>
            </>
        );
    }
}

export default Contador;
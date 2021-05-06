import React, {Component} from 'react';
import Saludo from "./components/Saludo";
import Contador from "./components/Contador";
import Listado from './components/Listado';


class App extends Component {

  render() {
    return (
      <>
      <div>
        <Saludo
          mensaje="Juan" 
          numero={7 + 5}
          booleano={true}
          vec = {[1,2,3,4,5]}
          funcion = {(a)=> a*2}
          componente = {<strong>Hola mundo</strong>}
        />;

      </div>
      <br />
      <div>
        <Contador />
      </div>
      <div>
        <Listado />        
      </div>
      </>
    ) 
  }

}

export default App;

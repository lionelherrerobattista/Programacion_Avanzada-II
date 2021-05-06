import { Component } from 'react';
import './App.css';

//Componente funcional
const Saludo = (props) => {
  return <h2>Hola {props.name}</h2>
}

//Componente de clase
class Despedida extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <h3>Chau {props.name}</h3>;
    
  }
}

const nombre = "Josecito";

function App() {
  return (
    <div className="App">
      <Saludo name={nombre}/>
      <Despedida name="Alicia"/>
    </div>
  );
}

export default App;

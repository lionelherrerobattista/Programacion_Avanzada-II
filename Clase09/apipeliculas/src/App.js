import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import 'bulma/css/bulma.css';
import SearchForm from './components/SearchForm';
import Movie from './components/Movie';
import MoviesList from './components/MoviesList';


function App() {
  let titulo = "Buscador de películas";
  const [lista, setLista] = useState([]);
  const [flag, setFlag] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handlerResults = (resultados) => {
    if(resultados.mensaje) {
      setMensaje(resultados.mensaje);
    } else {
      setLista(resultados);
      setMensaje("");
    }

    setFlag(true); //bandera
  }

  return (
    <div>
      <Header>{titulo}</Header>
      <div className="container-form">
        <SearchForm onSearch={handlerResults}/>
      </div>
      {
        flag && 
        (mensaje ? <p>{mensaje}</p> : <MoviesList lista={lista} />) 
      }
    </div>
    
  );
}

export default App;

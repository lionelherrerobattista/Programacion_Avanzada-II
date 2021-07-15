import Header from './components/Header';
import React, { useEffect, useState } from 'react';
import Listado from './components/Listado';

let URL = 'https://pokeapi.co/api/v2/pokemon/';

function App() {

  const [lista, setLista] = useState([]);
  const [loading, setLoading] = useState(false);
  const [next, setNext] = useState(null);
  const [prev, setPrev] = useState(null);
  const [peticion, setPeticion] = useState(false);

  const handlerNext = () => {
    if(!next) return;
    URL = next;
    setPeticion(!peticion);
  }

  const handlerPrev = () => {
    if(!next) return;
    URL = prev;
    setPeticion(!peticion);
  }

  useEffect(() => {
    setLista([]);

    const getData = async () => {
      setLoading(true);

      try {   
      let res = await fetch(URL);
      let data = await res.json();

      setNext(data.next);
      setPrev(data.previous);

      data.results.forEach( async (poke) => {
        console.log(poke);
        let res = await fetch(poke.url);       
        let p = await res.json();

        const nuevoPokemon = {
          id: p.id,
          name: p.name, 
          avatar: p.sprites.front_default
        };

        //es asíncrono:
        setLista((value) => {
          return [...value, nuevoPokemon]
        });

      });

    } catch(error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  //Ejecuto la función asíncrona
  getData();

  }, [peticion]); // [] para que se ejecute con cada petición

  return (
    <div >
      <Header handlerNext={handlerNext} handlerPrev={handlerPrev} title="Listado de Pokemones" />
      {
        loading || <Listado lista={lista} />
      }
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import Formulario from './components/Formulario';
import Header from './components/Headers';
import Tabla from './components/Tabla';

const lista = [
  {
    id:1,
    nombre:"German",
    especialidad:"Vegetales",
  },
  {
    id:2,
    nombre:"Donato",
    especialidad:"Pastas",
  },
  {
    id:3,
    nombre:"Dolly",
    especialidad:"Asado",
  },
  {
    id:4,
    nombre:"Kristophe",
    especialidad:"Croissant",
  },
  {
    id:5,
    nombre:"Damian",
    especialidad:"Macarrons",
  },
];


function App2() {
  const [cocineros, setCocineros] = useState(lista);
  const [editado, setEditado ] = useState(null)

  //funciones
  const altaCocinero = (nuevoCocinero) => {
    nuevoCocinero.id = Date.now();

    setCocineros([...cocineros, nuevoCocinero]);
  }

  const modificarCocinero = (cocinero) => {
    //cuando encuentre uno con ese id devuelve un array con el elemento sino devuelve todo:
    setCocineros(cocineros.map(elemento => elemento.id === cocinero.id? cocinero : elemento)); 
  }

  const bajaCocinero = (id) => {
    //filter devuelve array desvinculado del original, saco el que tiene le mismo id
    setCocineros(cocineros.filter(elemento => elemento.id !== id )); 
  }

  return (
    <div className="container">
     <Header title={"MasterChef"} />
     <Formulario 
      altaCocinero={altaCocinero} 
      modificarCocinero={modificarCocinero}
      editado={editado}
      setEditado={setEditado} //lo necesito en el botón editar y en el formulario, se da cuenta si tiene id o no
      />
     <Tabla 
      data={cocineros} //para renderizar
      bajaCocinero={bajaCocinero} //manejador botón click
      setEditado={setEditado} //para seleccionar el cocinero a editar
      />
    </div>
  );
}

export default App2;

import React, { useEffect, useState } from 'react';
import Formulario from '../components/Formulario';
import Header from '../components/Headers';
import Loader from '../components/Loader';
import Mensaje from '../components/Mensaje';
import Tabla from '../components/Tabla';

const URL = "http://localhost:3000/api/";
const errorInicial = {
  error:false,
  mensaje: "",
  bgc: ""
}

const Home = () => {
  const [cocineros, setCocineros] = useState([]);
  const [editado, setEditado ] = useState(null); //valor inicial es null
  const [loading, setLoading ] = useState(false);
  const [error, setError] = useState(errorInicial);




  useEffect(() => {
    let token = JSON.parse(localStorage.getItem("token"));
    
    const options = {
      method: "GET",
          headers: {
              "Authorization": "Bearer " + token,
          },
    }

    setLoading(true);
    fetch(URL + 'cocineros', options)
      .then((res) => {
        // false -> promesa rechazada para que la capture el catch:
        return res.ok ? res.json() : Promise.reject(res);
      })
      .then((data) => {
        setCocineros(data);
        setLoading(false);
        setError(errorInicial); //limpio si hubo un error
      })
      .catch((err) => {
        setLoading(false);
        let statusText = err.statusText || "Ocurrió un error";
        setError({
          error:true, 
          mensaje: `Error:${err.status} - ${statusText}`,
          bgc: "red"
        });
        setLoading(false);
      })
  }, []);

  //funciones
  const altaCocinero = (nuevoCocinero) => {
    //nuevoCocinero.id = Date.now();
    let token = JSON.parse(localStorage.getItem("token"));
    setLoading(true);

    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(nuevoCocinero)
    }
    
    fetch(URL + 'cocineros', options)
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })//devuelve promesa no parseada
    .then(cocinero => {
      setCocineros([...cocineros, cocinero]);
      setLoading(false);
      setError(errorInicial); //limpio si hubo un error
    })
    .catch(err => {
      setLoading(false);
      let statusText = err.statusText || "Ocurrió un error";
      setError({
        error:true, 
        mensaje: `Error:${err.status} - ${statusText}`,
        bgc: "red"
      });
    })

    // setCocineros([...cocineros, nuevoCocinero]);
  }

  const modificarCocinero = (cocinero) => {
    let token = JSON.parse(localStorage.getItem("token"));

    if(!window.confirm("¿Confirma modificación?"))return;

    setLoading(true);

    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + token,
      },
      body: JSON.stringify(cocinero)
    }
    
    fetch(URL + 'cocineros/' + cocinero.id, options)
    .then(res => {
      return res.ok ? res.json() : Promise.reject(res);
    })//devuelve promesa no parseada
    .then(cocinero => {
      //cuando encuentre uno con ese id devuelve un array con el elemento sino devuelve todo:
      setCocineros(cocineros.map(elemento => elemento.id === cocinero.id? cocinero : elemento)); 
      setLoading(false);
      setError(errorInicial); //limpio si hubo un error
    })
    .catch(err => {
      setLoading(false);
      let statusText = err.statusText || "Ocurrió un error";
      setError({
        error:true, 
        mensaje: `Error:${err.status} - ${statusText}`,
        bgc: "red"
      });
    }); 
  }

  const bajaCocinero = (id) => {
    if(!window.confirm("¿Confirma eliminación?"))return;
    let token = JSON.parse(localStorage.getItem("token"));
    setLoading(true);
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json;charset=utf-8",
        "Authorization": "Bearer " + token,
      },
    }
    
    fetch(URL + 'cocineros/' + id, options)
    .then(res => {
      
      if(!res.ok) return Promise.reject(res);
      
      //filter devuelve array desvinculado del original, saco el que tiene le mismo id
      setCocineros(cocineros.filter(elemento => elemento.id !== id ));
      setLoading(false);
      setError(errorInicial); //limpio si hubo un error
    })//devuelve promesa no parseada
    .catch(err => {
      setLoading(false);
      let statusText = err.statusText || "Ocurrió un error";
      setError({
        error:true, 
        mensaje: `Error:${err.status} - ${statusText}`,
        bgc: "red"
      });
    })
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
      {error.error && <Mensaje color="white" bgColor={error.bgc}>{error.mensaje}</Mensaje>}
      {
        //Si loading esta en true se muestra el loader, si está en false no se muestra:
        loading ? <Loader /> : 
        
        <Tabla 
        data={cocineros} //para renderizar
        bajaCocinero={bajaCocinero} //manejador botón click
        setEditado={setEditado} //para seleccionar el cocinero a editar
        modificarCocinero={modificarCocinero}
        />
      }
     
    </div>
  );
}

export default Home;

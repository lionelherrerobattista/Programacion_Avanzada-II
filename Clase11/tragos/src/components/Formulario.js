import React, { useContext, useState } from 'react';
import { CategoriasContext } from '../context/CategoriasContext';
import { CoctelesContext } from '../context/CoctelesContext';

const Formulario = () => {

    //Tengo que usar el useContext
    const { categorias } = useContext(CategoriasContext);
    const { setSearch, setFlagBusqueda } = useContext(CoctelesContext);
    
    const [busqueda, setBusqueda] = useState({ingrediente: "", categoria: ""});

    const {ingrediente, categoria} = busqueda;

    const handlerChange = (e) => {      
        setBusqueda({...busqueda, [e.target.name] : e.target.value}); //actualizo el estado
    };

    const handlerSubmit = (e) => {
        e.preventDefault();
        
        if(ingrediente.trim() === "" || categoria.trim() === ""){
            alert("Faltan datos");
            return
        }

        setSearch(busqueda);
        setFlagBusqueda(true);
        //console.log("Enviando...");
    }

    //console.log(categorias);

    return ( 
        <div className="row pb-4">
            <form className="col-12 mt-4" onSubmit={handlerSubmit}>
                <fieldset className="text-center">
                    <legend>Buscar Bebidas Por Ingrediente y Categoría</legend>
                    <div className="row pt-4">
                        <div className="col-md-4">
                            <input type="text" name="ingrediente" value={ingrediente} onChange={handlerChange} placeholder="--Ingrese Ingrediente" className="form-control" />
                        </div>
                        <div className="col-md-4">
                            <select name="categoria" className="form-control" value={categoria} onChange={handlerChange}>
                                <option value="">--Seleccione Categoría--</option>
                                {
                                    categorias.map(categoria => <option key={categoria.strCategory} value={categoria.strCategory}>{categoria.strCategory}</option>)
                                }
                            </select>
                        </div>
                        <div className="col-md-4">
                            <input type="submit" value="Buscar bebidas" className="btn btn-primary w-100"></input>
                        </div>
                    </div>
                </fieldset>
            </form>
        </div>
     );
}
 
export default Formulario;
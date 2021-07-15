import React, { useEffect, useState } from 'react';

   
const frmInicial = {
    id: null,
    nombre: "",
    especialidad: "",
    favorito: false,
    cantidadCapitulos: 0
}

const Formulario = ({altaCocinero, modificarCocinero, editado, setEditado}) => {
    const [form, setForm] = useState(frmInicial);

    const { nombre, especialidad, cantidadCapitulos, favorito } = form;

    useEffect(() => {
        if(editado){
            setForm(editado);
        } else {
            setForm(frmInicial);
        }
    }, [editado]);
    
    //Handler de los botones
    const handlerChange = (e) => {

        if(e.target.name === "favorito"){
            if(e.target.value === 'si'){
                setForm({...form, favorito:true})
             } else {
                 setForm({...form, favorito:false})
             }
        } else {
            setForm({...form, [e.target.name]:e.target.value});
        }         
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault();

        //validaciones
        if( nombre.trim()==="" || especialidad.trim()==="" ){
            alert("Datos incompletos!!!");
            return;
        }

        if(cantidadCapitulos < 0 || cantidadCapitulos > 100){
            alert("El número tiene que ser mayor a 0 y menor a 100");
            return;
        }
        //Si llego acá no se activó el return
        //2 opciones o hago alta o hago el update
        editado ? modificarCocinero(form) : altaCocinero(form);
        
        //setForm(frmInicial);
        handlerReset();

        console.log("enviando...");
    }
    
    const handlerReset = (e) => {
        setForm(frmInicial);
        setEditado(null);
    }
    

    return (   
        <div className="contenedor-form">
            <form onSubmit={handlerSubmit}>
                <input type="text" name="nombre" placeholder="Ingrese nombre" onChange={handlerChange} value={nombre}/>
                <input type="text" name="especialidad" placeholder="Ingrese especialidad" onChange={handlerChange} value={especialidad}/>
                <label htmlFor="cantidadCapituloso">Capitulos:</label>
                <input type="text" id="cantidadCapitulos" name="cantidadCapitulos" placeholder="Ingrese capitulos" onChange={handlerChange} value={cantidadCapitulos? cantidadCapitulos : 0}/>
                <label htmlFor="favorito">Favorito:</label>
                <select name="favorito" id="favorito" value={favorito? "si" : "no"} onChange={handlerChange}>
                    <option value="si">Si</option>
                    <option value="no">No</option>
                </select>
                <input type="submit" value={editado? "Modificar Cocinero" : "Alta Cocinero"}/>
                <input type="reset" value="Limpiar" onClick={handlerReset}/>
            </form>
        </div>
     );
}
 
export default Formulario;
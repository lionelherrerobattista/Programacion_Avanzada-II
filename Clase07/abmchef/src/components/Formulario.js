import React, { useEffect, useState } from 'react';

   
const frmInicial = {
    id: null,
    nombre: "",
    especialidad: "",
}

const Formulario = ({altaCocinero, modificarCocinero, editado, setEditado}) => {
    
    const [form, setForm] = useState(frmInicial);

    const { nombre, especialidad } = form;

    useEffect(() => {
        if(editado){
            setForm(editado);
        } else {
            setForm(frmInicial);
        }
    }, [editado]);
    
    //Handler de los botones
    const handlerChange = (e) => {
        setForm({...form, [e.target.name]:e.target.value});
    }
    
    const handlerSubmit = (e) => {
        e.preventDefault();
        
        //validaciones
        if( nombre.trim()==="" || especialidad.trim()==="" ){
            alert("Datos incompletos!!!");
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

                <input type="submit" value={editado? "Modificar Cocinero" : "Alta Cocinero"}/>
                <input type="reset" value="Limpiar" onClick={handlerReset}/>
            </form>
        </div>
     );
}
 
export default Formulario;
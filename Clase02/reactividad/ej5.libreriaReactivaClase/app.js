import Componente from "./componente.js";

const $lista = document.getElementById("lista");
const $txtTarea = document.getElementById("txtTarea");

const app = new Componente({
    selector: "#lista",
    state: {
        listaTareas:[]
    },
    template: function(props) {
        const $fragmento = document.createDocumentFragment();
        if(props.listaTareas.length == 0){
            const $item = document.createElement("li");
            $item.textContent = "No hay tareas pendientes";
            $fragmento.appendChild($item);
        } else {
            props.listaTareas.forEach((tarea)=> {
            const $item = document.createElement("li");
                $item.textContent = tarea;
                $fragmento.appendChild($item);
            });
        }
        return $fragmento;
    }
});


document.addEventListener('submit', (e) => {
    if(!e.target.matches("#frmTarea"))return false;
    
    e.preventDefault();
    if(!$txtTarea)return false;

    const estadoActual = app.getState();
    estadoActual.listaTareas.push($txtTarea.value);

    app.setState(estadoActual);

    $txtTarea.value = "";
    $txtTarea.focus(); 
})

document.addEventListener('DOMContentLoaded', () => {
   app.render()
})
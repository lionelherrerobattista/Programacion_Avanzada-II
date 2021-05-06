
const $lista = document.getElementById("lista");
const $txtTarea = document.getElementById("txtTarea"); //Me traigo la referencia

//El comportamiento se divide en tres partes
//Primera parte - actualizar un estado

const state = {
    listaTareas: []
}; //Lo defino como constante, no quiero que la referencia cambie

//Segunda parte - armar una plantilla

const template = () => {
    $fragmento = document.createDocumentFragment();
    if(state.listaTareas.length == 0){
        $item = document.createElement("li");
        $item.textContent = "No hay tareas pendientes";
        //otra forma:
        // const texto = document.createTextNode("No hay tareas pendientes");
        // $item.appendChild(texto);
        $fragmento.appendChild($item);
    } else {
        state.listaTareas.forEach((tarea)=> {
            $item = document.createElement("li");
            $item.textContent = tarea;
            $fragmento.appendChild($item);
        });
    }

    return $fragmento;
};


//Tercera parte - activar el renderizado (inserción en la UI)
const render = () => {
    //Limpio la lista
    $lista.innerHTML = "";
    $lista.appendChild(template());
};

document.addEventListener('submit', (e) => {
    if(!e.target.matches("#frmTarea"))return false;
    
    e.preventDefault();
    if(!$txtTarea)return false;

    state.listaTareas.push($txtTarea.value); //actualizo el estado
    render(); //cada vez que toco el estado se tiene que renderizar

    $txtTarea.value = "";
    $txtTarea.focus(); 
})
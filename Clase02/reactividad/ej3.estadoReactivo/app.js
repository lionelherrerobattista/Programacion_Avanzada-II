
const $lista = document.getElementById("lista");
const $txtTarea = document.getElementById("txtTarea"); //Me traigo la referencia

// El estado debe ser inmutable
// solo se actualizara mediante una función
const setState = (nuevoEstado) => {
    //recorro las key
    for (const key in nuevoEstado) {
        if (Object.hasOwnProperty.call(template.state, key)) {
            template.state[key] = nuevoEstado[key];
        }
    }
}

const state = {
    listaTareas: []
}; //Lo defino como constante, no quiero que la referencia cambie

//Segunda parte - armar una plantilla

const template = () => {
    $fragmento = document.createDocumentFragment();
    if(template.state.listaTareas.length == 0){
        $item = document.createElement("li");
        $item.textContent = "No hay tareas pendientes";
        //otra forma:
        // const texto = document.createTextNode("No hay tareas pendientes");
        // $item.appendChild(texto);
        $fragmento.appendChild($item);
    } else {
        template.state.listaTareas.forEach((tarea)=> {
            $item = document.createElement("li");
            $item.textContent = tarea;
            $fragmento.appendChild($item);
        });
    }

    return $fragmento;
};

template.state = {
    listaTareas: [],
}

const getState = () => {
    //desvinculo el estado del objeto original
    return JSON.parse(JSON.stringify(template.state));
}


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

    // const lista = state.listaTareas.concat($txtTarea.value); //hago una copia desvinculada (inmutabilidad)
    const estadoActual = getState(); //guardo la copia del state
    estadoActual.listaTareas.push('dsdsdds');
    //setState({listaTareas: lista}); //Le paso la lista para actualizar el estado
    setState(estadoActual);
    // render();

    $txtTarea.value = "";
    $txtTarea.focus(); 
})
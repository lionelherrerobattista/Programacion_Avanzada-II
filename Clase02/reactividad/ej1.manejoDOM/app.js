const $txtTarea = document.getElementById("txtTarea"); //Me traigo la referencia
const $lista = document.getElementById("lista");

//Delegación de eventos, aumenta rendimiento:
document.addEventListener('submit', (e) => {
    if(!e.target.matches("#frmTarea"))return false;
    
    e.preventDefault();
    if(!$txtTarea)return false;

    $lista.innerHTML += `<li>${$txtTarea.value}</li>`; //para inyectar string como html
    $txtTarea.value = ""; //limpiar el txtTarea
    $txtTarea.focus(); //para que quede con el foco para poner algo


}) //tercer parámetro true, click lo captura el document
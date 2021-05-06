
function Componente(options){
    this.selector = options.selector;
    this.state = options.state;
    this.template = options.template;   
}

Componente.prototype.render= function(){
    const $elDOM = document.querySelector(this.selector);
    $elDOM.innerHTML = "";
    $elDOM.appendChild(this.template(this.state));
}

Componente.prototype.setState = function(nuevoEstado){
    for (const key in nuevoEstado) {
        if (Object.hasOwnProperty.call(this.state, key)) {
            this.state[key] = nuevoEstado[key];
        }
    }
    this.render();
}

Componente.prototype.getState = function(){
    return JSON.parse(JSON.stringify(this.state));
}

export default Componente;
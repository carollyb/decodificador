class EncriptadorController{
    constructor(){
        this.cesar = document.getElementById("cifra");
        this.base = document.querySelector("#base");
        this.codificar = document.querySelector('#codificar');
        this.decodificar = document.querySelector('#decodificar');
        this.resultado = document.querySelector('#resultado');
        this.textoUsuario = document.querySelector('#texto');
        this.incremento = document.querySelector('#numCesar');

    }
}
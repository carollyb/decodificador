class EncriptView{
    constructor(elemento){
        this.elemento = elemento
    }

    update(model){
        this.elemento.html(`<p>${model}</p>`)
    }
    
    //resultado.innerText = texto2;


   // resultado.innerText = texto3
}
class EncriptView{
    constructor(elemento){
        this.elemento = elemento
    }

    update(model){
        this.elemento.html(`<p>${model.codCesar()}</p>`)
    }
    
}
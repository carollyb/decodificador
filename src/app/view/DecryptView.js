class DecryptView{
    constructor(elemento){
        this.elemento = elemento;
        this.radioButtons = document.querySelectorAll('input[name="tipos"]')
    }

    update(model){
        
        let selectedSize;
            for (const radioButton of this.radioButtons) {
                if (radioButton.checked) {
                    selectedSize = radioButton.value;
                    break;
                }
            }
        selectedSize == 'cifra' ? this.elemento.html(`<p>${model.decodCesar()}</p>`) : this.elemento.html(`<p>${model.decodBase()}</p>`);
    }
    
}
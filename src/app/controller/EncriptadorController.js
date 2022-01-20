class EncriptadorController{
    constructor(){
        this.cesar = document.getElementById("cifra");
        this.base = document.querySelector("#base");
        this.codificar = document.querySelector('#codificar');
        this.decodificar = document.querySelector('#decodificar');
        this.resultado = document.querySelector('#resultado');
        this.textoUsuario = document.querySelector('#texto');
        this.senhaCesar = document.querySelector('#senhaCesar');
        this.botaoCod = $('#textoCod')
        this.botaoCod.show();
        this.senhaCesar.show();

        this.encriptView = new EncriptView(this.resultado)
    }

    Encryptor(event){
        event.preventDefault();

        let cod = new Encryptors(this.textoUsuario.value)
        if (this.cesar){

            let resultCodCesar = cod.CodCesar();
            this.encriptView.update(resultCodCesar)

        } else if (this.base.checked) {
            let resultCodBase = cod.CodBase();
            this.encriptView.update(resultCodBase)

        }


    }

    Decryptor(event){
        event.preventDefault();
        let cod2 = new Decryptors(this.textoUsuario.value)
        if (this.cesar.checked){
            return cod2.DecodCesar()
        } else if (this.base.checked) {
            return cod2.DecodBase()
        }
    }

}
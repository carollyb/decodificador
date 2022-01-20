class EncriptadorController{
    constructor(){
        this.cesar = $("cifra");
        this.base = $("#base");
        this.codificar = $('#codificar');
        this.decodificar = $('#decodificar');
        this.resultado = $('#resultado');
        this.textoUsuario = $('#texto');
        this.senhaCesar = $('#senhaCesar');
        this.botaoCod = $('#textoCod');
        this.botaoDecod = $('#textoDecod');

        this.encriptView = new EncriptView(this.resultado)
    }

    show(){
        this.senhaCesar.show();
    }

    hide(){
        this.senhaCesar.hide();
    }

    showCodButton(){
        this.botaoDecod.hide();
        this.botaoCod.show();
    }

    showDecodButton(){
        this.botaoCod.hide();
        this.botaoDecod.show();
    }

    Encryptor(){
        //event.preventDefault();

        let cod = new Encryptors(this.textoUsuario.value)
        let resultCodCesar = cod.CodCesar();
        this.encriptView.update(resultCodCesar)
        
            

        /* else if (this.base.checked) {
            let resultCodBase = cod.CodBase();
            this.encriptView.update(resultCodBase)

        }*/


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
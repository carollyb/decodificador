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

        this.encriptView = new EncryptView(this.resultado)
        this.decryptView = new DecryptView(this.resultado)
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

    Encryptor(event){
        event.preventDefault();

        let resultCod = new Encryptors(this.textoUsuario.val());
        
        this.encriptView.update(resultCod)

    }

    Decryptor(event){
        event.preventDefault();

        let resultadoDecod = new Decryptors(this.textoUsuario.val());

        this.decryptView.update(resultadoDecod)
    }

}
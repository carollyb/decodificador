class Decryptors{

    constructor(mensagem){
        this.mensagem = mensagem;
        this.incremento = document.querySelector('#numCesar');
    }
    
    DecodCesar(){

        textoUsuarioU = textoUsuarioU.toUpperCase();
        incremento = incremento.value;
        var texto5 = '';
        for (var i=0;i<textoUsuarioU.length;i++) {
            var asciiN = textoUsuarioU[i].charCodeAt();
            if (asciiN >= 65 && asciiN <= 77) {
                texto5 += String.fromCharCode(asciiN - parseInt(incremento));
            } else if (asciiN >=78 && asciiN <= 90) {
                texto5 += String.fromCharCode(asciiN + parseInt(incremento));
            } else {
                texto5 += textoUsuarioU[i];
            }
        }
        resultado.innerText = texto5;
    }

    DecodBase() {
        return window.atob(this.mensagem);
    }

}
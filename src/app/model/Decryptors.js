class Decryptors{

    constructor(mensagem){
        this.mensagem = mensagem;
        this.decremento = $('#numCesar');
    }

    getMsg() {
        return this.mensagem
    }
    
    decodCesar(){

        //transforma o value do input passado como parâmetro no constructor para uppercase
        let msg = this.getMsg();
        var textoUsuarioU = msg.toUpperCase();

        var decremento = this.decremento.val();

        var texto4 = '';
        for (var i=0;i<textoUsuarioU.length;i++) {
            var letraAtual = textoUsuarioU.charCodeAt(i);
            if (letraAtual > 64 && letraAtual < 91) {
                if (parseInt(letraAtual) - parseInt(decremento)<65){
                    texto4 += String.fromCharCode(parseInt(letraAtual) - parseInt(decremento)+26);
                } else {
                    texto4 += String.fromCharCode(parseInt(letraAtual) - parseInt(decremento));
                }
            } else if (letraAtual == 32) {
                    texto4 += ' '
            } else {
                texto4 += String.fromCharCode(parseInt(letraAtual))
            }
        }
        return texto4;
    }

    decodBase() {
        return window.atob(this.getMsg());
    }

}
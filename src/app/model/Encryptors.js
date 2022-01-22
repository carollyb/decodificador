class Encryptors{

    constructor(mensagem){
        this.mensagem = mensagem;
        this.incremento = $('#numCesar');
    }

    getMsg() {
        return this.mensagem
    }
    codCesar(){
        //transforma o value do input passado como parâmetro no constructor para uppercase
        let msg = this.getMsg();
        var textoUsuarioU = msg.toUpperCase();

        var incremento = this.incremento.val();

        var texto4 = '';
        for (var i=0;i<textoUsuarioU.length;i++) {
            var letraAtual = textoUsuarioU.charCodeAt(i);
            if (letraAtual > 64 && letraAtual < 91) {
                if (parseInt(letraAtual) + parseInt(incremento)>90){
                    texto4 += String.fromCharCode(parseInt(letraAtual) + parseInt(incremento)-26);
                } else {
                    texto4 += String.fromCharCode(parseInt(letraAtual) + parseInt(incremento));
                }
            } else if (letraAtual == 32) {
                    texto4 += ' '
            } else {
                texto4 += String.fromCharCode(parseInt(letraAtual))
            }
        }
        return texto4;
    }
    
    codBase() {
        
        return window.btoa(this.getMsg());

    }

}
class EncriptadorCesar{


    CodCesar(){
        var textoUsuarioU = textoUsuario.value;
        textoUsuarioU = textoUsuarioU.toUpperCase();
        incremento = incremento.value;
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
            }
        }
        resultado.innerText = texto4;
    }
    
    DecodCesar(){
        var textoUsuarioU = textoUsuario.value;
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

}
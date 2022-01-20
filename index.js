
//eventos


//isso vai ser passado na view
resultado.innerText = 


//eventos para exibir o texto codificado ou decodificado
textoCod.addEventListener('click', function(){
    if(codificar.checked && base.checked) {
        resultadoCodBase(); 
    } else if (codificar.checked && cesar.checked) {
        resultadoCodCesar();
    }
});

textoDecod.addEventListener('click', function(){
    if(decodificar.checked && base.checked) {
        resultadoDecodBase();
    } else if (decodificar.checked && cesar.checked) {
        resultadoDecodCesar();
    }
});


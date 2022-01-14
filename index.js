
//eventos
cesar.addEventListener("click", function(){
    if (cesar.checked) {
        senhaCesar.style.display = "flex"
        base.style.display = "none"
    }
});

base.addEventListener("click", function(){
    if (base.checked) {
        senhaCesar.style.display = "none"
    }
})

codificar.addEventListener("click", function(){
    if (codificar.checked) {
        textoCod.style.display = "flex"
        textoDecod.style.display = "none"
    } 
})

decodificar.addEventListener("click", function(){
    if (decodificar.checked) {
        textoDecod.style.display = "flex"
        textoCod.style.display = "none"
    }
})





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


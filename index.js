var cesar = document.getElementById("cifra");
var base = document.querySelector("#base");
var codificar = document.querySelector('#codificar');
var decodificar = document.querySelector('#decodificar');
var resultado = document.querySelector('#resultado');
var textoUsuario = document.querySelector('#texto');
var incremento = document.querySelector('#numCesar');

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

//funções
function resultadoCodBase() {
    var texto2 = window.btoa(textoUsuario.value);
    resultado.innerText = texto2;
}

function resultadoDecodBase() {
    var texto3 = window.atob(textoUsuario.value);
    resultado.innerText = texto3;
}

function resultadoCodCesar(){
    var textoUsuarioU = textoUsuario.value;
    textoUsuarioU = textoUsuarioU.toLowerCase();
    var alfabeto = 'abcdefghijklmnopqrstuvwxyz'.split('');
    incremento = incremento.value;
    var texto4 = '';
    for (var i=0;i<textoUsuarioU.length;i++) {
        var letraAtual = textoUsuarioU[i];
        if (letraAtual === ' ') {
            texto4 += letraAtual;
            continue;
        }
        var indiceAtual = alfabeto.indexOf(letraAtual);
        var novoIndice = indiceAtual + incremento;
        if (novoIndice > 25) {
            novoIndice = novoIndice + 26;
            texto4 += alfabeto[novoIndice]
        } else if (novoIndice < 0) {
            novoIndice = novoIndice - 26;
            texto4 += alfabeto[novoIndice];
        } else if (textoUsuarioU[i] === textoUsuarioU[i].toUpperCase()) {
            texto4 += alfabeto[novoIndice].toUpperCase();
        } else {
            texto4 += alfabeto[novoIndice]
        }
    }
    resultado.innerText = texto4;
};

function resultadoDecodCesar(){
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


class EncriptadorBase{

    
    CodBase() {
        var texto2 = window.btoa(textoUsuario.value)
    }

    DecodBase() {
        var texto3 = window.atob(textoUsuario.value);
    }

}
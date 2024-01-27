function criptografar() {
    var textoOriginal = document.getElementById("originalTextarea").value;
    let tempTexto = "";
    const palavraScreta = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat"
    };

    for (let i = 0; i < textoOriginal.length; i++) {
        if (textoOriginal[i] in palavraScreta) {
            tempTexto += palavraScreta[textoOriginal[i]];
            
        } else {
            tempTexto += textoOriginal[i];
        }
        
    }
    document.getElementById("resultadoTextarea").value = tempTexto;
}

function decriptografar() {
    let textParaDescriptografar = document.getElementById("originalTextarea").value;

    textParaDescriptografar = textParaDescriptografar.replace(/enter/g, "e");
    textParaDescriptografar = textParaDescriptografar.replace(/imes/g, "i");
    textParaDescriptografar = textParaDescriptografar.replace(/ai/g, "a");
    textParaDescriptografar = textParaDescriptografar.replace(/ober/g, "o");
    textParaDescriptografar = textParaDescriptografar.replace(/ufat/g, "u");

    document.getElementById("resultadoTextarea").value = textParaDescriptografar;
}

function copiar() {
    var resultadoTextarea = document.getElementById("resultadoTextarea");

    resultadoTextarea.select();
    document.execCommand("copy");
}
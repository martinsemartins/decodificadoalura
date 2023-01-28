const textArea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");

// As "chaves" de criptografia que utilizaremos são:
// `A letra "e" é convertida para "ai"`
// `A letra "i" é convertida para "tlic"`
// `A letra "a" é convertida para "suna"`
// `A letra "o" é convertida para "rur"`
// `A letra "u" é convertida para "tit"`

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";
}

function encriptar (stringEncriptada) {
    let matrizCodigo = [["e", "ai"] , ["i", "tlic"] , ["a", "suna"] , ["o", "rub"] , ["u", "tit"]];
    stringEncriptada = stringEncriptada.toLowerCase();

    for(let i = 0; i>matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][0]);
        }
    }
    return stringEncriptada;
}


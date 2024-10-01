let vogal = "aeiouAEIOU"
let contador = 0;

function contadorVogais(str) {
    for(let i = 0; i < str.length; i++) {
        if(vogal.includes(str[i])) {
            contador = contador + 1;
        }
    }
    return contador;
}

console.log(`Aparecem ${contadorVogais("hello world")} vogais na sua frase.`)
let frase = "isso é uma string"
let contador = 0;
let letra = 's'

for(let i = 0; i < frase.length; i++) {
    let fraseDividida = frase.split("")
    if(fraseDividida[i] == letra) {
        contador++;
    }
}

console.log(`O caractere escolhido '${letra}' aparece ${contador}x na frase`)
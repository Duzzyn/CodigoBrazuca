let frase = 'ala'

let palindromo = frase.split('').reverse().join('')

function verificaPalindromo() {
    if(frase == palindromo) {
        console.log(`A frase '${frase}' é um palindromo.`)
    } else {
        console.log(`A frase ${frase} não é um palindromo`)
    }
}

verificaPalindromo()
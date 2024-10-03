let numero = 20
let divisores = [];

for(let divisor = 1; divisor < numero + 1; divisor++) {
    if (numero % divisor == 0) {
        divisores.push(divisor)
    }
}

console.log(`Os divisores de ${numero} são: ${divisores}`)
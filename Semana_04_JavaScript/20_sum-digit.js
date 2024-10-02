let digitos = 234

function somarDigitos(num) {
    let separar = num.toString().split("").map(Number)
    let armazenaNum = 0;

    for(let i = 0; i < separar.length; i++) {
        armazenaNum += separar[i]
    }
    return console.log(`A soma dos digitos '${digitos}' é: ${armazenaNum}`);
}

somarDigitos(digitos)
function fibonacci (n) {
    let num1 = 0
    let num2 = 1

    let lista = [num1, num2]

    if(n <= 2) {
        numero = n - 1
    } else {
        for(let i = 2; i < n; i++) {
            soma = num1 + num2 // 1° iteração: output: 1
            num1 = num2 // num1 = 1; atualiza o valor do penultimo número
            num2 = soma; // num2 = 1 atualiza o valor pro ultimo número somado
            lista.push(soma)
        }
        return lista;
    }
}

console.log(fibonacci(10))
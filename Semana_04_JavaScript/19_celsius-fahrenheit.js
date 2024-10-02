function celsiusFahrenheit (celsius) {
    let conversao = (celsius * 9/5) + 32
    
    return conversao;
}

console.log(`A temperatura em Fahrenheit é: ${celsiusFahrenheit(10)}`)
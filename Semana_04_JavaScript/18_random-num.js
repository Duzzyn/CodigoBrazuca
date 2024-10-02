function randomNumber () {
    let random = Math.floor(Math.random() * 100) + 1

    return random;
}

console.log(`Número gerado: ${randomNumber()}`)
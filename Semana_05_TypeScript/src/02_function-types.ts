function saudacao(nome: string, idade?: number, nascimento?: number):string {
    if(idade && nascimento) {
        return `Olá, ${nome}! Você tem ${idade} e nasceu na data: ${nascimento}.`
    } else if(idade) {
        return `Olá, ${nome}! Você tem ${idade}.`
    } else {
        return `Olá ${nome}!`
    }


}

console.log(saudacao("Eduardo", 17))
console.log(saudacao("Eduardo", 17, 25042007))
console.log(saudacao("Eduardo"))
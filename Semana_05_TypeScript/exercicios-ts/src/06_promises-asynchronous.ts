function buscarDados(): Promise<string> {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados Carregados"), 1500)
    })
} 

async function exibirDados() {
    console.log("Carregando...")
    const dados = await buscarDados()
    console.log(dados)
}

exibirDados()
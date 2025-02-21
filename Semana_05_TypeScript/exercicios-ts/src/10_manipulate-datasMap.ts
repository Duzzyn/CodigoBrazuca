function filtrarPrecosAltos<T>(precos: number[]): number[] {
    return precos.filter(preco => preco > 100)
}

console.log(filtrarPrecosAltos([50, 150, 200, 100, 320, 10, 20]))
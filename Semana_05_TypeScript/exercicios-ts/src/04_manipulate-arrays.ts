function calcularMedia(numeros: number[]): number {
    const total = numeros.reduce((acc, value) => acc + value, 0)
    return total / numeros.length;
}

console.log(calcularMedia([10, 1, 2, 2, 2.5, -19]))
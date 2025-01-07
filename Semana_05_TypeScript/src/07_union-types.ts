function formatarEntrada(valor: string | number):string | number {
    return typeof valor === "string" ? valor.toUpperCase() : valor * 10;
}

console.log(formatarEntrada("isso é uma string"))
console.log(formatarEntrada(1))
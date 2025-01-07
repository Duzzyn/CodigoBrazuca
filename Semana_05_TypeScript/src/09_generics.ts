const arrayTeste = [1, 4, 6, "a", "b", "e"]

function reverterArray<T>(items: T[]): T[] {
    return items.reverse()
}

function filtrarArrayParaString<T>(arr: T[]) {
    return arr.filter((x) => typeof x == "string")
}

console.log(filtrarArrayParaString(arrayTeste))
console.log(reverterArray(arrayTeste))

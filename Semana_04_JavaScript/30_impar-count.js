let lista = [1, 3, 5, 8, 10]
let contador = 0;

for(let i = 0; i < lista.length; i++) {
    if(lista[i] % 2 !== 0) {
        console.log(contador)
        contador += 1;
    }
}

console.log(`Existem ${contador} números ímpares na lista`);

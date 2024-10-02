let lista = [1, 5, 2, 3, 6]

function ordenaLista() {
    for(let atual = 0; atual < lista.length; atual++) {
        let valorAtual = lista[atual] 
        let indicePercorre = atual - 1

        while(indicePercorre >= 0 && valorAtual < lista[indicePercorre]) {
            lista[indicePercorre + 1] = lista[indicePercorre]

            indicePercorre -= 1
        }
        lista[indicePercorre + 1] = valorAtual
    }
    return lista;
}

console.log(ordenaLista())
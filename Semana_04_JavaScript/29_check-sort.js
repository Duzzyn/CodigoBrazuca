let listaOrdenada = [1, 5, 2, 3, 6]
let listaNaoOrdenada = [1, 3, 5, 9]

function ordenaLista() {
    for(let atual = 0; atual < listaOrdenada.length; atual++) {
        let valorAtual = listaOrdenada[atual] 
        let indicePercorre = atual - 1
        
        while(indicePercorre >= 0 && valorAtual < listaOrdenada[indicePercorre]) {
            listaOrdenada[indicePercorre + 1] = listaOrdenada[indicePercorre]

            indicePercorre -= 1
        }
        listaOrdenada[indicePercorre + 1] = valorAtual
    }
    return listaOrdenada;
}

function verificaListaCrescente(listaOrdenada) {
    if(listaOrdenada === ordenaLista()) {
        return console.log(true,":A lista está ordenada.");
    } else {
        return console.log(false,":A lista não está ordenada.");
    }
}

console.log(verificaListaCrescente(listaNaoOrdenada))
let lista = ['Maçã', 2, 'Torta']

function verificaNumeroLista(lista) {
    return lista.some(item => typeof item === 'number');
}

console.log(verificaNumeroLista(lista))
let lista = [1, 2, 4]
let resultado = 1;

function multiplicaItens() {
    for(let i = 0; i < lista.length; i++) {
        resultado *= lista[i]
    }
    return console.log(resultado);
}

multiplicaItens()


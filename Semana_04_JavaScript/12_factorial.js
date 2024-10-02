let resultado = 1;

function fatorial(num) {
    for(let i = num; i > 0; i--) {
        resultado *= i 
    }
    return resultado;
}


console.log(fatorial(4))
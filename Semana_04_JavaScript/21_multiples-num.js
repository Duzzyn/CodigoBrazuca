let num1 = 10;
let num2 = 5;

function numerosMultiplos(num1, num2) {
    if(num1 % num2 == 0) {
    return console.log(true,":Os números são múltiplos entre si.");
    }
    return console.log(false,":Os números não são múltiplos entre si.");
}

numerosMultiplos(num1, num2)
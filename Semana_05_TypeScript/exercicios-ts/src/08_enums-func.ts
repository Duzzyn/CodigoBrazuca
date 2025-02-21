enum DiasSemanas {
    Segunda = "Segunda-feira",
    Terca = "Terça-feira",
    Quarta = "Quarta-feira",
    Quinta = "Quinta-feira",
    Sexta = "Sexta-feira",
    Sabado = "Sábado",
    Domingo = "Domingo",
    Feriado = "Finados",
    Especial = "Natal"
}

function ehFimDeSemana(dias: DiasSemanas):boolean {
    return dias === DiasSemanas.Sabado || dias === DiasSemanas.Domingo;
}

function verificaEspecialEFeriado(dias: DiasSemanas): boolean {
    return dias === DiasSemanas.Feriado || dias === DiasSemanas.Especial;
}

console.log(ehFimDeSemana(DiasSemanas.Domingo))
console.log(ehFimDeSemana(DiasSemanas.Quarta))


console.log("É feriado?:", verificaEspecialEFeriado(DiasSemanas.Feriado))
console.log("É dia Especial?:", verificaEspecialEFeriado(DiasSemanas.Especial))
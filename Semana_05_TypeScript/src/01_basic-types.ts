let nome: string = 'Eduardo';
let idade: number = 17;
let ativo: boolean = true;
let hobbies: string[] = ["Ler, Jogar, Esportes"];
let endereco: {pais: string, cidade: string, estado: string, bairro: string} = { 
    pais: "Brasil",
    cidade: "Rio de Janeiro",
    estado: "RJ",
    bairro: "Confidential"
}

console.log(`Nome: ${nome}, Idade: ${idade}, Ativo: ${ativo}`)
console.log(`Hobbies: ${hobbies}`)
console.log(`Endereço: ${endereco.pais}, ${endereco.cidade} - ${endereco.estado}, ${endereco.bairro}`)
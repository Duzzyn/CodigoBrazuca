class Animal {
    nome: string;
    som: string;

    constructor(nome:string, som: string) {
        this.nome = nome,
        this.som = som
    }


    emitirSom(): string {
        return `${this.nome} faz ${this.som}`
    }
}

class Cachorro extends Animal {
    raca: string;

    latirForte(): string {
        return `${this.nome} da raça "${this.raca}" Late Forte!`
    }

    constructor(nome: string, som: string, raca: string) {
        super(nome, som);
        this.raca = raca;
    }
}

const zeus = new Cachorro("Zeus", "au au", "Bulldog Frânces");
console.log(zeus.emitirSom());
console.log(`Raça: ${zeus.raca}`);

const trevor = new Cachorro("Trevor", "AU AU", "Pitbull");
console.log(trevor.emitirSom())
console.log(trevor.latirForte());
console.log(`Raça: ${trevor.raca}`)

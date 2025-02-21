interface Produto {
    nome: string,
    preco: number,
    disponivel: boolean,
    categoria: string
}

function produtosDisponiveis(produtos: Produto[]): Produto[] {
    return produtos.filter(produto => produto.disponivel)
}

function produtosCategorias(categoria: string): Produto[] {
    return produtos.filter(produto => produto.categoria === categoria)
}

const produtos: Produto[] = [
    { nome: "Teclado", preco: 100, disponivel: true, categoria: "Periféricos" },
    { nome: "Mouse", preco: 50, disponivel: false, categoria: "Periféricos" },
    { nome: "Monitor", preco: 300, disponivel: true, categoria: "Periféricos" },
    { nome: "Halls", preco: 2, disponivel: true, categoria: "Doce" }
];

console.log("Filtragem por disponibilidade:", produtosDisponiveis(produtos))
console.log("Filtragem por categoria:", produtosCategorias("Doce"))
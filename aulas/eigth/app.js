let pessoa = {
    nome : "Gabriel Luciano",
    idade: 17,
    profissao: "Desenvolvedor de Software",
    apresentar: function () {
        console.log("Olá, meu nome é " + this.nome + " eu tenho " + this.idade + " anos e eu sou "+ this.profissao );
}
}
        pessoa.apresentar();


let carro = {
    marca : "Mitsubishi",
    modelo: "Lancer",
    ano: 2012,
    ligar: function(){
        console.log("Carro ligou");
}
}
        carro.ligar();
        

let Produtos = { 
    loja : {
        Nome: "Nike",
        produtos :['Tênis de Corrida', 'Camiseta Dry Fit', 'Camiseta Brasil Azul', 'Camiseta Brasil Amarela', 'Meião Brasa' ]
}
}
    console.log(Object.entries(Produtos.loja.produtos));
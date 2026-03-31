
//Função tradicional
function saudacao(nome, idade) {

    console.log(`Olá ${nome}, vc tem ${idade} anos de idade`);   
    
}
//Função anônima
const dobro = function(a) {
    return a * 2
}

//Arrow function
const soma =  (b,c) => b + c;


saudacao("Gabriel Luciano", 17)

console.log( "Dobro de 256:", dobro(256));

console.log("Soma:", soma(9,7));



let frutas = ["Lichia","Banana","Graviola","Pitaya","Cajá" ]
let numeros = [2,5,8,3,1,7,9,10,6,4]


console.log(frutas);

frutas.push("Romã");
console.log(frutas);

frutas.pop();
console.log(frutas);

frutas.unshift("Abacaxi");
console.log(frutas);

frutas.shift();
console.log(frutas);

console.log(numeros);
let pares = numeros.filter(n => n % 2 === 0);
console.log(pares);

let quadrados = numeros.map(n => n * n);
console.log(quadrados);

let soma = numeros.reduce((acc,n)=> acc + n , 0 );
console.log(soma);

numeros.sort((a,b) => a - b);
console.log(numeros);

numeros.reverse();
console.log(numeros);
/* let i = 0 //começo

while(i<=9) {  //Enquanto a condição, que no caso é o i <= 9 
    console.log("loop:", i) // Executa console
    i++ // Incremeneta o interador
}

console.log("Chegou ao fim do código")

//Exemplo 2

let estomago = 0 //Começo

while(estomago <= 100) {
    console.log("Quero comer mais coxinhas", estomago)
    estomago += 10 // igual a estomago += 10 }



let numero 
let soma = 0

while(numero !== 0) {
    numero = Number(prompt("Digite um numero"))
    soma += numero
    
}
console.log(`O resultado é ${soma}`) */

let c = 1

do{
    console.log("O valor de C É:", c)
    c++
}while(c < 6) 

// Exemplo do FOR

for(let i = 0; i <= 9 ; i++){
    console.log("O valor de i é:", i)
}

let numero = [14, 67, 89, 15, 23]

for(let i = 0; i < 6; i++) {
    console.log(meuArray[i])
}
//Exercicio
let i1 = [11, 15, 18, 14, 12, 13]
let maiorNumero
for(let i1 = 0; i < 6; i++) {
    if(maiorNumero > array[i1])
    maiorNumero = array[i1]
}
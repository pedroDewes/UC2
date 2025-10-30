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

/*let c = 1

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

let valor = 0
for(let i = 0; i < 5; i++){
    valor += i
}
console.log(valor) // O código faz loops somando todos os valores de 0 a 4. Dando como resultado 10 no console.log
 
//2  
// a) Serão exibidos no console.log os números 19,21, 23, 25, 27 e 30
//b) Não é possivel pois é possivel utilizar o index of.

//3
// No console log será impresso * ** *** **** em lista]  

//Outros exercícios de fixação
//1a)

let bichinhosEstimacao = []
let bichinho = Number(prompt("Quantos bichinhos de estimação voçê tem?"))
if(bichinho===0){
    console.log("Que pena, voçê pode adotar um pet!")
}
else if(bichinho > 0){
for(let i = 0; i < bichinho; i++){
let nomes = prompt("Digite o nome dos bichinhos")
bichinhosEstimacao.push(nomes)
}
}
console.log("Os nomes dos seus pets são:", bichinhosEstimacao) */

//2 

let arrayOriginal = [10, 15, 20, 25, 30, 40, 50, 55]
for(let numero of arrayOriginal){ // for of percorre por todo array       
    
}
for(let numero of arrayOriginal){
    console.log(numero/10)
}
let novoArray = []
for(let i = 0; i < 7; i++){
if(arrayOriginal[i]%2===0) {
    novoArray.push(arrayOriginal[i]) 
}
} console.log(novoArray)

let arrayString = ["O elemento do índex i é: numero"]
console.log(arrayString)



 //Desafios

 
/* Ecercício 1

a) False
b) false
c) true
d) boolien*/

2.
 const numeroPar = prompt("Escolha um número par.")
 console.log(numeroPar%2) // Como todos são pares o resto vai ficar 0.

3. 

const idade = prompt("Qual é a sua idade?")
const idadeMeses = idade * 12
const idadeDias = idade * 365
const idadeHoras = idadeDias * 24

console.log(idadeMeses)
console.log(idadeDias)
console.log(idadeHoras)

// Exercicios fixação

 const primeiroNumero = prompt("EScolha um primeiro número")
 const segundoNumero = prompt("Escolha um segundo número")

console.log( "O primeiro número é maior que o segundo?",primeiroNumero>segundoNumero)
console.log("O primeiro número número é igual ao segundo?", primeiroNumero === segundoNumero)
console.log("O primeiro número é divisível pelo primeiro?", (primeiroNumero%segundoNumero)=== 0)
console.log("O segundo número é divisível pelo primeiro?", primeiroNumero%primeiroNumero===0)

// Desafio !!!!!

let Fahrenheit = 77
let FahrenheitEmKelvin = (5/9 * (77 - 32)) + 273.15

console.log("Fahrenheid transformado em kelvin é",FahrenheitEmKelvin, "graus")

let Celcius = 80
let CelciusEmFahrenheid = (80 * 1.8) + 32

console.log("80 graus celcius para fahrenheid é", CelciusEmFahrenheid, "graus")

let CelciusEmFahrenheid2 = (30 * 1.8) + 32
let CelciusEmKelvin = 30 + 273

console.log("30 graus celcius para fahrenheid é",CelciusEmFahrenheid2, "graus", "e 30 graus celcius em fahrenheid é", CelciusEmKelvin)

//NAO FEITO!!!!!!!!!!!!!!!!!!



// Segunda parte do desafio

quiloWattHora = 0.05

gastoResidencia = quiloWattHora * 280

PromoWatt = quiloWattHora%15

console.log("O gasto pela residência por hora é", gastoResidencia, "O valor do gasto com a promo é", PromoWatt)

// Terceira Parte

const LibrasEmKg = 20 / 0.453592
const OzEmKg = 10.5 /  0.0283
const milhasEmMetros = 100 * 1609.34
const pesEmMetros = 50 * 0.3048
const galParaLitros = 103.56 * 3.78541
const xicEmLitros = 450 * 0.24
const UserChoise = prompt("Escolha o numero de pés que quer tranformar em litros.")

console.log(LibrasEmKg)
console.log(OzEmKg)
console.log(milhasEmMetros)
console.log(pesEmMetros)
console.log(galParaLitros)
console.log(xicEmLitros)
console.log(UserChoise * 0,3048)


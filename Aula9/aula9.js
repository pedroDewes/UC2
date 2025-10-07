const nome = "Pedro"
const idade = 16
/*
// Aspas duplas
const frase = "O meu nome é" + nome + "e minha idade é" + idade + "anos"
console.log(frase);
console.log(typeof frase)

// Aspas Simples
const frase2 = 'O meu nome é' + nome + "e minha idade é' + idade + 'anos'
console.log(frase2);
console.log(typeof frase2)

// template
const frase3 = `O meu nome é  ${nome}  e minha idade é + ${idade} + anos`

console.log(frase3);
console.log(typeof frase3) */

// Exercício

const nome2 = prompt("Qual é o seu nome?")

const cor = prompt("Escolha sua cor favorita") 

console.log("Seu nome é ", nome2, "e sua cor favorita é", cor, ".")

//

console.log("Seu nome é " + nome2 + " e sua cor favorita é " + cor)

//Template

console.log(`Seu nome é  ${nome2}  e sua cor favorita é ${cor}`)

// Método toLowerCase
console.log(nome.length)
 const fraseMaiuscula = "OieEEeEE"
 const fraseMinuscula = fraseMaiuscula.toLowerCase()
 console.log( fraseMaiuscula, fraseMinuscula)
 //Metodo toUpperCase
 const fraseUpper = fraseMaiuscula.toUpperCase()
 console.log(fraseMaiuscula,fraseUpper)

 const fraseCenoura = "Hoje comi cenoura, adoro cenoura"

 console.log(fraseCenoura.includes("cenoura"))
 console.log(fraseCenoura.includes("Batata"))

 const novaFrase = fraseCenoura.replaceAll("cenoura", "batata")
 console.log(novaFrase)

 //Exercícios

 const fraseMaiuscula2 = prompt("Escreva uma frase!")

 const fraseMaiuscula3 = fraseMaiuscula2.toUpperCase()

console.log(fraseMaiuscula3)


 
console.log(fraseMaiuscula2.replaceAll("o","i"))
console.log(fraseMaiuscula2.length)

const listaDeCompras = ["Abacate","Banana","Tomate"]

console.log(listaDeCompras[0])

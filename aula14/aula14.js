/* function imprimirOlaMundo(){
    console.log("Olá Mundo")
}

for(let i = 0; i < 3; i++){ //Declarando a variável
    console.log(imprimirOlaMundo())
}

imprimirOlaMundo(); // Invocação da função


// EXERCÍCIOS
//1

function imprimirBemVindoTurma25(){
    console.log("Bem vindo Turma25-2N!")
}

//2

function somaDeDoisNumeros(){
const resultado = numero1 + numero2
console.log(resultado)
}

//3

function dobrarNumero(){
    const dobro = numero * 2
    console.log(dobro)
}

//Parametrôs

//1

function nomeDaFunction(nome){
 console.log("Olá", nome)
}

nomeDaFunction("Viviane")
nomeDaFunction("Letícia")
nomeDaFunction("Leomar")

//2

function somaDosNumeros(n1,n2){
    console.log("A soma é", n1 + n2)
}
somaDosNumeros(2,5)

// ESCOPO

function imprimeVariavel(){
  //escopo local
  const b = 2
  console.log("A variável a:", a)
  console.log("A variável b:", b)
}

//invoca função

imprimeVariavel()
console.log("A variável a é", a)
console.log("A variável b é", b)

function calculaArea(altura, largura){
    let area = altura * largura
    //console.log(area)
    return area
}
let resultadoArea = calculaArea(2,3)
console.log(resultadoArea)//6
console.log(calculaArea(2,3))//6  */

//ATIVIDADES

//1

function somaNumeros(number1,number2){
    let soma = number1 + number2
    return soma
}
let resultadoSoma = somaNumeros(1,2)
console.log(resultadoSoma)
console.log(somaNumeros(1,2))

//2

let arrayNumeros = [20, 30, 50, 56, 89, 222]
let arrayNumeros2 = [2, 4, 5, 7, 9, 10]
function divisao(array){
    let novoarray = []
    novoArray = []
    novoArray.push(arrayNumeros2[0]/2)
    novoArray.push(array[array.lengh()-1]/2)
    return novoArray
}
console.log(divisao(arrayNumeros))
le

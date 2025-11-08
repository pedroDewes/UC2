//Exercícios de fixação
//1. a) vai ser impresso 10 e 50 no console.log!!
   //b) Não aparecerá nada pois não foi usado o console.log!!

//2 a) Ela pega o texto do usuário e se caso o texto dele tiver a palavra "cenoura" irá ser true

  
let textoDoUsuario = prompt("Insira um texto"); // T

const outraFuncao = function(texto) {
    return texto.toLowerCase().includes("cenoura")
}
const resposta = outraFuncao(textoDoUsuario)
console.log(resposta)

//b) A saída do console.log será para todos como true

//1

function imprimirInfo() {
console.log("Eu sou Pedro, tenho 17 anos, moro no Rio Grande do Sul e sou estudande")
}

//2 a)
  

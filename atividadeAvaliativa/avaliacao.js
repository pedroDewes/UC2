// Atividade Avaliativa 1 Dupla: `Pedro e Vinicius Cardoso

const velocidadeMadeira = Number(20)
const velocidadePedra = Number(30)   // Pergunta ao usuário qual bloco ele vai quebrar, dependendo da escolha
const velocidadeFerro = Number(50)    //ele deve usar picareta de diamante, pedra, ferro ou mandeira.
const velocidadeDiamante = Number(80)
const blocoMinerar = prompt("Qual bloco você vai minerar?").toLowerCase() 
 
if (blocoMinerar==="pedra") { // Se o bloco for de pedra aparecerá isso no console.log!
    console.log("Use picareta de Ferro ou Pedra, é o ideal", "velocidade de", velocidadeFerro,
     "ou", velocidadePedra)

}
else if (blocoMinerar==="minério de diamante") { //Se for de diamante aparecerá isso no console.log!
    console.log("Use picareta de diamante", "velocidade", velocidadeDiamante)
}
else if (blocoMinerar==="obsidiana") { //Se for de obsidiana aparecerá isso no console.log!
    console.log("Use picareta de diamante", "velocidade", velocidadeDiamante)
}
 else //Se for qualquer outro bloco aparecerá isso no console.log!
    console.log("Qualquer ferramenta funciona, mas a madeira é a mais simples.")
 
// Outro desafio

let danoEspada = Number(6)
let forcaEncantamento = Number(1.5)
let armaduraInimiga = Number(2) 
let vidaInimiga = Number(20)
const danoBruto = danoEspada*forcaEncantamento
const danoFinal = danoBruto - armaduraInimiga   //As variáveis ganham um valor para depois calcularmos se
vidaInimiga -= danoFinal          // ganhamos ou perdendo a batalha contra o creeper. Caso perder irá calcular
if(vidaInimiga<=0) {              // o restante de vida do creeper!
    console.log("O creeper foi derrotado! Você sobreviveu à explosão!")
}
else console.log("O creeper ainda está vivo, com", vidaInimiga, "pontos de vida")

// Atividade 3

const temDiamantes = true
const nivelMesaCrafting = Number(2)    // Se as condições estiverem de acordo com o código abaixo, será
const temGravetos = false            // possível craftar a picareta!
let temFerro = Number(10)

if(temGravetos===false || nivelMesaCrafting < 3 && temDiamantes===true && temFerro >= 8) {
    console.log("Picareta de diamante criada! Hora de buscar obsidiana!")
}
else console.log("Faltam recursos ou as condições de crafting não são atendidas!")
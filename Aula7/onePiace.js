ouroTotal = 75000
membrosTripulacao = 9
recompensaBaseLuffy = 3000000000
aumentoRecompensa = 150000000
bonusExperiencia = 500
forcaTripulacao = 95

// Atividade com essas variáveis

ouroPorMembro = ouroTotal / membrosTripulacao
restoOuro = ouroPorMembro%membrosTripulacao
novaRecompensaLuffy =  recompensaBaseLuffy + aumentoRecompensa
poderLuffy = recompensaBaseLuffy * bonusExperiencia
reducaoAumento =  aumentoRecompensa -= 50000000

console.log(ouroPorMembro)
console.log(restoOuro)
console.log(novaRecompensaLuffy)
console.log(poderLuffy)
console.log(reducaoAumento)

// segunda parte da Atividade

forcaInimigo = 120
chanceVitoria = 0.7
limiteSeguranca = 0.8
temAkumaNoMi = true 
inimigoTemHaki = true
combateJusto = "sim"
combateRapido = "sim"

podeVencer = forcaTripulacao >= forcaInimigo
riscoAlto = chanceVitoria < limiteSeguranca
batahaFacil = combateJusto == combateRapido


console.log("A forcaTripulação é maior ou igual que a forca inimigo?", podeVencer)
console.log("A chanceVitoria é menor (<) que o limiteSeguranca?",riscoAlto)
console.log("O combateJusto é igual (==) ao combateRapido? ", batahaFacil)

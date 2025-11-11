/*const professor = {
    nome : "Lucas",
    idade : 33,
    email : "lucas.g.f.alves@gmail.com"
}

console.log(professor.nome)
console.log(professor["idade"])
console.log(professor.email)

const laptop = {
    tela : 15,
    processador : "Ryzen",
    marca : "LeNovo",
    modelo : "K14",

    console.log("A marca do lapTop é:", laptop.marca)
   

}*/

const filme = {
    direcao : "Marvel",
    nome: "Vingadores Ultimato",
    lancamento : 2019,
    elenco : [
    {ator : "Xuxa", personagem : "Homem de ferro"},
    {ator : "Chris Evans", personagem : "Capitão América"},
    {ator : "Mark Ruffalo", personagem : "Hulk"}
    ],
    jaAssistido : "sim",
}

console.log("A direção do filme é:", filme.direcao)
console.log("O nome do filme é:", filme.nome)
console.log("O lançamento foi em:", filme.lancamento)
console.log("A",filme.ator[2], "interpreta o persongem", filme.personagem[2],"o", filme.ator[2], "interpreta", filme.personagem[1], "o", filme.ator[2], "interpreta o", filme.personagem[2])
console.log("Já assistido pelo Pedro?", filme.jaAssistido)


const representPessoa = {
    nome : "Vinicíus",
    idade : 17,
    generoMusicaFav : "Pagode"
}

console.log("O nome da pessoa é", representPessoa.nome, "ela tem", representPessoa.idade, "anos", "e gosta muito de", representPessoa.generoMusicaFav)

const professores = [
    {nome : "Lucas", modulo : 2},
    {nome : "Dal", modulo : 1},
    {nome : "Valter", modulo : 1},
    
]
console.log("O professor:", professores[1].nome,
"deu o modulo:", professores[1].modulo)


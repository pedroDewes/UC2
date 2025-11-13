//Ecercícios de fixação

//1. Vai ser inscrito no primeiro console.log: "Matheus Nachtergaele"
//  No segundo vai aparecer Virginia Cavendish
//  No terceiro: Vai exibir todo transmissão.

const filme = {
    nome : "Auto da compadecida",
    ano : 2000,
    elenco : ["Matheus N", "selton Mello", "Denise", "Virginia"],

    transmissoesHoje : [
        {canal : "Telecine", horario : "21"},
        {canal : "canal Brasil", horario : "19h"},
        {canal : "Globo", horario : "14h"}

    ]
}

console.log(filme.elenco[0])
console.log(filme.elenco[filme.elenco.length -1])
console.log(filme.transmissoesHoje)

//2 

const cachorro = {   //a) Vai aparecer todas as caracteristicas dos três animais
    nome : "Juca",   //b)  Ele expande os elementos do objeto
    idade : 3,
    raca : "SRN",   
}

const gato = {...cachorro, nome : "Juba"}

const tartaruga = {...gato  , nome: gato.nome.replaceAll("a", "o")}

console.log(cachorro)
console.log(gato)
console.log(tartaruga)

//3

function minhaFuncao(objeto, propriedade) {
    return objeto[propriedade]
}

const pessoa = {        //a) Undefined e false
    nome : "Caio",      //b) O valor "altura" não está no objeto para ser definido no console
    idade : 23,           
    backender : false
}

console.log(minhaFuncao(pessoa, "backender"))
console.log(minhaFuncao(pessoa, "altura"))

//1 a) Exercícios de fixação Parte 2
const people = { 
    nome : "Pedro Lima",
    apelidos : ["Bruxo", "irmão", "parceiro"]
}

console.log(`Eu sou ${people.nome}, mas pode me chamar de ${people.apelidos[0]}, ${people.apelidos[1]}, ${people.apelidos[2]}`)

//b)

const copiaNome = ["Pedrinho", "Pedrão", "PL", people]
console.log(copiaNome)


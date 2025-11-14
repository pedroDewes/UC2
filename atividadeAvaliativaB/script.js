// array de personagens
const personagens = [
    {nome: "Aragorn", classe: "Herói", nivel: 20, hp: 180, habilidades: ["Espadachim", "Rastreamento", "Liderança"], historicoAcoes: []},
    {nome: "Gandalf", classe: "Mago", nivel: 25, hp: 220, habilidades: ["Magia maior", "Sabedoria", "Luz de Valinor"], historicoAcoes: []},
    {nome: "Legolas", classe: "Arqueiro", nivel: 18, hp: 160, habilidades: ["Arco élfico", "Visão Aguçada", "Agilidade"], historicoAcoes: []}
];

// função para atacar
function atacar(personagem) {
    let acao = personagem.nome + "atacou";
    personagem.historicoAcoes.push(acao);
    console.log(acao);
}

// função para defender
function defender(personagem) {
    let acao = personagem.nome + "se defendeu";
    personagem.historicoAcoes.push(acao);
    console.log(acao);
}

// função para usar habilidade
function usarHabilidade(personagem, habilidade) {
    if (personagem.habilidades.includes(habilidade)) {
        let acao = personagem.nome + "usou a habilidade" + habilidade;
        personagem.historicoAcoes.push(acao);
        console.log(acao);
    } else {
        let acao = personagem.nome + "não conseguiu usar sua habilidade";
        personagem.historicoAcoes.push(acao);
        console.log(acao);
    }
}

// função para buscar personagem pelo nome
function buscarPersonagem(nome) {
    for (let i = 0; i < 3; i++) {
        if (personagens[i].nome.toLowerCase() === nome.toLowerCase()) {
            return personagens[i];
        }
    }
} //Teste
let aragorn = buscarPersonagem("Aragorn")
atacar(aragorn)
defender(aragorn)
usarHabilidade(aragorn, "Liderança")
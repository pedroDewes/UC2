// array de personagens
const personagens = [
    {nome: "Aragorn", classe: "Herói", nivel: 20, hp: 180, habilidades: ["Espadachim", "Rastreamento", "Liderança"], historicoAcoes: []},
    {nome: "Gandalf", classe: "Mago", nivel: 25, hp: 220, habilidades: ["Magia maior", "Sabedoria", "Luz de Valinor"], historicoAcoes: []},
    {nome: "Legolas", classe: "Arqueiro", nivel: 18, hp: 160, habilidades: ["Arco élfico", "Visão Aguçada", "Agilidade"], historicoAcoes: []}
];

// atacar
// função para atacar
function atacar(personagem) {
    let acao = personagem.nome + " atacou"; // cria a frase da ação
    personagem.historicoAcoes.push(acao);   // adiciona no histórico
    console.log(acao);                      // mostra no console
}

// defender
function defender(personagem) {                  
    let acao = personagem.nome + " se defendeu";
    personagem.historicoAcoes.push(acao);
    console.log(acao);
}

// usar habilidade
function usarHabilidade(personagem, habilidade) {
    let tem = false;  //verifica se a habilidade existe no array de habilidades do personagem
    for (let i = 0; i < personagem.habilidades.length; i++) {
        if (personagem.habilidades[i] === habilidade) {
            tem = true;
        }
    }
    if (tem) {
        let acao = personagem.nome + " usou a habilidade " + habilidade;
        personagem.historicoAcoes.push(acao);
        console.log(acao);
    } else {  //se não encontrar a habilidade, mostra que não conseguiu usar
        let acao = personagem.nome + " não conseguiu usar a habilidade";
        personagem.historicoAcoes.push(acao);
        console.log(acao);
    }
}

// buscar personagem
function buscarPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i].nome.toLowerCase() === nome.toLowerCase()) {
            return personagens[i];
        }
    }
    return undefined;
}

// excluir personagem
function excluirPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) {
        if (personagens[i]() === nome.toLowerCase()) {
            personagens.splice(i, 1);
            console.log("Personagem " + nome + " foi excluído.");
            return;
        }
    }
    console.log("Personagem não encontrado!");
}

// listar todos
function listarPersonagens() {
    console.log("Lista de personagens:");
    for (let i = 0; i < personagens.length; i++) {
        let p = personagens[i];
        console.log(p.nome + " | Classe: " + p.classe + " | Nível: " + p.nivel + " | HP: " + p.hp);
    }
}

// verificar status
function verificarStatus(nome) {
    let personagem = buscarPersonagem(nome);
    if (personagem) {
        console.log("Status de " + personagem.nome + ":");
        console.log("Classe: " + personagem.classe);
        console.log("Nível: " + personagem.nivel);
        console.log("HP: " + personagem.hp);

        console.log("Habilidades:");
        for (let i = 0; i < personagem.habilidades.length; i++) {
            console.log("- " + personagem.habilidades[i]);
        }

        console.log("Histórico de Ações:");
        for (let i = 0; i < personagem.historicoAcoes.length; i++) {
            console.log((i + 1) + ". " + personagem.historicoAcoes[i]);
        }
    } else {
        console.log("Personagem não encontrado!");
    }
}

// Teste 
let aragorn = buscarPersonagem("Aragorn");
atacar(aragorn);
defender(aragorn);
usarHabilidade(aragorn, "Liderança");

listarPersonagens();
verificarStatus("Aragorn");
excluirPersonagem("Legolas");
listarPersonagens();

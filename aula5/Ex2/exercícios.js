// Lista geral de personagens
let personagens = [];

// Cadastro de personagem
function cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
  let personagem = {
    nome: nome,
    classe: classe,
    nivel: nivel,
    hp: hp,
    habilidades: habilidades,
    historico: []
  };
  personagens.push(personagem);
}

// Ações dos personagens
function realizarAcao(nome, acao) {
  let personagem = buscarPersonagem(nome);
  if (personagem) {
    personagem.historico.push(acao);
    console.log(nome + " fez: " + acao);
  } else {
    console.log("Personagem não encontrado!");
  }
}

// Buscar personagem por nome
function buscarPersonagem(nome) {
  for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].nome === nome) {
      return personagens[i];
    }
  }
  return null;
}

// Excluir personagem
function excluirPersonagem(nome) {
  for (let i = 0; i < personagens.length; i++) {
    if (personagens[i].nome === nome) {
      personagens.splice(i, 1); // remove do array
      console.log("Personagem " + nome + " foi excluído.");
      return;
    }
  }
  console.log("Personagem não encontrado!");
}

// Listar todos os personagens
function listarPersonagens() {
  console.log("Lista de personagens:");
  for (let i = 0; i < personagens.length; i++) {
    let p = personagens[i];
    console.log(p.nome + " | Classe: " + p.classe + " | Nível: " + p.nivel + " | HP: " + p.hp);
  }
}

// Verificar status
function verificarStatus(nome) {
  let personagem = buscarPersonagem(nome);
  if (personagem) {
    console.log("Status de " + personagem.nome + ":");
    console.log("Classe: " + personagem.classe);
    console.log("Nível: " + personagem.nivel);
    console.log("HP: " + personagem.hp);
    console.log("Habilidades: " + personagem.habilidades.join(", "));
    console.log("Histórico: " + personagem.historico.join(" | "));
  } else {
    console.log("Personagem não encontrado!");
  }
}

// ------------------- TESTE -------------------
cadastrarPersonagem("Gandalf", "Mago", 50, 100, ["Magia", "Liderança"]);
cadastrarPersonagem("Aragorn", "Guerreiro", 45, 120, ["Espadachim", "Curandeiro"]);

realizarAcao("Gandalf", "Lançou feitiço de luz");
realizarAcao("Aragorn", "Defendeu ataque");

listarPersonagens();
verificarStatus("Gandalf");

excluirPersonagem("Aragorn");
listarPersonagens();



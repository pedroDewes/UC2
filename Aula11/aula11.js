 
 /*let chapeuHp = prompt("Escolha um desses chápeus de Harry Poter: Hermione, Ana, Luna, Narcisa") 
    switch(chapeuHp.toLowerCase()) {
        case "hermione" :
            console.log("Grifinória!")
            console.log("Entrou no case1")
        break
        case "ana" :
            console.log("Lufa-Lufa")
            console.log("Entrou no case2")
        break
        case "Narcisa" :
            console.log("Sonserina")
            console.log("Entrou n case3")
    }
       
    let condicao1 = true
    let condcao2 = false
    if(condicao1&&condicao2){
        console.log("Executou o if do operador && AND")
    }

    if(condicao1||condicao2){
        console.log("Exeuctou o if do operador || or")
    }

    if(!condicao1){
        console.log("Executou o if do operador ! NOT")
    }


    let ensinoMedioCompleto = prompt("Você  tem o ensino médio completo?").toLowerCase() === 'sim'
    let maiorIdade = prompt("Quantos anos você tem?") >= 18
    let semFaculdade = prompt("Você está cursando outra faculdade?").toLowerCase() === 'sim'
 

    if(ensinoMedioCompleto && maiorIdade && !semFaculdade) {
        console.log("Você pode estudar nessa faculdade")
    }
    else{console.log("Você não pode estudar nessa faculdade")} */

    // Exercícios de Fixação
     // 1.
const respostaUsuario = prompt("Digite o número que você quer testar")
const numero = Number(respostaUsuario)

if( numero % 2 === 0) {                      //a) O teste ve se os numero colocados pelo usuário são 
                                                // iguais a 0.
    console.log("Passou no teste")
}                                            //b) Para números que tiverem como resto igual a 0.
else {
    console.log("Não passou teste")           //c) Para números que não são iguais a 0.
}

//2.

//a) O código serve para definir o preo das frutas usando a variável preço.
//b) 2.25
//c) O intervalo de pera será retiradov e irá juntar com o default

//3.

//a) Está transformando o valor recebido pelo usuário em número usando o "Number".
//b) Se for 10 ira aparecer: "Esse número passou no teste" e -10 não irá aparecer nada no terminal.
//c) Haverá pois não tem o else para caso o número não seja 10.

//4.

let idade = prompt("Qual é a sua idade?") >= 18
if(idade) {
    console.log("Pode dirigir")
} else{
    console.log("Não passou no teste")
}
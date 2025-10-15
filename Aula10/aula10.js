 /*condicao1 = true

if(condicao1){ //como o valor da condicao é true, o código do bloco é executado
    console.log("Entrei no if 1")
}

let condicao2 = false
if(condicao2){
    console.log("Entrei no if 2") //como o valor é falso, o código não é executado 
}  



const num1 =  Number(prompt("Diga um número"))
const num2 =  Number(prompt("Diga outro"))

if(num1===num2) {console.log("Parabéns os números são iguais!")}

else {console.log("Os numeros são diferentes")} */
let condicao1 = true
let condicao2 = true
let condicao3 = true

if(condicao1) {console.log("Entro no if 1")}

else if(condicao2) {console.log("Entrou no else if 1")}

else if(condicao3) {"Entrou no ELSE IF 2"}
else
console.log("Entrou no ELSE")

num1 = Number(prompt("Digite um número"))
num2 = Number(prompt("Digite outro número "))

const condition1 = (num1 > num2)
const condition2 = (num1 < num2)
const condition3 = (num1 = num2)

if(condition1) {console.log("O primeiro número é maior que o segundo")}
else if(condition2) {console.log("O segundo número é maior que primeiro")}
else if(condition3) {console.log("Os números são iguais!")}

let paisOrigem = prompt("Digite o seu país de Origem")

 switch(paisOrigem.toLowerCase) {
    case "brasil" : 
       console.log("nacionalidade Brasileira")
       console.log("Entrou na case1")
    break
    case  "eua" :
          console.log("Nacionalidade Americana")
          console.log("Entrou no case3")
    break
    case "india" :
              console.log("Nacionalidade indiano")
 }


 let pokemonInical = prompt("Escolha entre o Bulbasaur, Charmander ou o squirtle!")
    switch(pokemonInical.toLowerCase()) {
        case "bulbasaur" :
            console.log("Tem o tipo planta e veneno!")
            console.log("Entrou na case1")
        break 
        case "charmander" :
                console.log("Tem fogo como poder")
             console.log("Entrou na case2")
        break
        case "squirtle" :
            console.log("Tem em sua composição água")
            console.log("Entrou na case3")
        break    
            
    }
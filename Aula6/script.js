1.
let a = 10
let b= 10

console.log(b)

b = 5
console.log(a, b)

/*Como a variável é "let", é possivel alterar o valor no meio do código assim como b era 5,
 no final do código virou 10. Console.log serve para imprimi o código e ao rodar no GoLive no index.html
 vai aparecer no console como 10, 10 e 5*/

2.
let x = 10
let y = 20
z = x
y = z
x = y

console.log(x,y,z)

/* Com a variável let é possivel alterar o valor de x ou y no final do código, 
como no começo que x = 10 e no final x = 20.*/

let horasDiarias= prompt("Quantas horas você trabalha por dia?")
let RecebimentoDiario = prompt("Quanto você recebe por dia?")
console.log("Voce recebe ",horasDiarias,"/",RecebimentoDiario,"por hora")


/* Ele utiliza o let horasDiárias para "Quantas horas voce trabalha por dia e let RecebimentoDiário
para "Quanto voce recebe por dia?", no final o console.log imprime a frase ficando "Você recebe por 
hora o RecebimentoDiário divido pelas horasDiárias*/

let nome  
let idade 

console.log(typeof(nome), typeof(idade))

/*Esse tipo foi impresso "undefined" porque não foi atribiudo á variável um valor8*/

let nome2 = prompt("Qual o seu nome?")
let idade2 = prompt("Qual é a sua idade?")

console.log("Qual é o seu nome?", nome2,"Qual é a sua idade?", idade2, "anos")

console.log(typeof(nome2), typeof(idade2))
// Irá ser um string string.







 
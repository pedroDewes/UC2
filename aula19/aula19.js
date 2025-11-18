//Exercícios
/*
let matriz = [
   [0,0,0],
   [0,0,0],
   [0,0,0]
]

  matriz[1][2] = 1

console.log(matriz) 

let soma = 0

let matriz = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
//loop que fará percorrer a linha, matriz.lenght retorna 3
for(let i = 0; i < matriz.length ; i++) {
    for(let j = 0 ; j < matriz[i].length; j++){
        soma += matriz[i][j]
    }
}
console.log("A soma da matriz é", soma) */

//Exercício 2
let somar = 0

let matriz44 = [
   [1 ,2 , 3, 4],
   [5 ,6, 7 , 8],
   [9 ,10,11,12],
   [13,14,15,16]

]
for(let x = 0; x < matriz44.length ; x++) {
    for(let y = 0 ; y < matriz44[x].length; y++){
        somar += matriz44[x][y]
    }
}
console.log("A soma dos valores da matriz é", somar)
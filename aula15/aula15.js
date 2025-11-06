// Exercícios SINTAXE

const soma = function(){
    const num1 = 5
    const num2 = 6 
    const resultado = num1 + num2
    console.log(`A soma é ${resultado}`)
}

const dobro = ()=> {
    let dobrinho = 20 * 2
    console.log("O dobro será", dobrinho)
}
dobro()

function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDesangue, temPelosGrossos){
 
if (temPeleGelada&&temSedeDesangue&&brilhaAoSol) {
    console.log("Vampiro")
}
if (transformaComLuaCheia&&temPelosGrossos) {
    console.log("Lobisomem")
}
else {
    console.log("È um ser humano")
}

}

determinaMonstro()
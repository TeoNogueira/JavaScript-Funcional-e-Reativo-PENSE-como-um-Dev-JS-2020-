//mock é quando você tenta simular uma depenncia externa de uma função


let qtdExec = 0

//FUNÇÃO PURA

function somar(a, b) {
 
    qtdExec++
    return a + b

}

console.log(somar(5, 20))
console.log(somar(15, 20))
console.log(somar(45, 20))
console.log('Foram executadas', qtdExec)
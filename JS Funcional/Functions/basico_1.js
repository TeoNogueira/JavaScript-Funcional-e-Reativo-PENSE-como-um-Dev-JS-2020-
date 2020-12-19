// function declaration



function bomDia( ) {


console.log('Bom dia!')

}

bomDia()
//function expression

const boaTarde = function() {


console.log('boa tarde')

}

boaTarde()



function somar(a, b = 0) {

return  a + b
}

let resultado = somar(3, 5)

console.log(resultado)

resultado = somar(3, 2, 2, 3, 4, 5, 6, 7)

console.log(resultado)


resultado = somar(3)

console.log(resultado)

//
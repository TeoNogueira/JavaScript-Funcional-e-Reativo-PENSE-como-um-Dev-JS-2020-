//arrow function

/*
const felizNatal = () => 

console.log("feliz Natal")


felizNatal()


const saudacao = nome => `fala ${nome}, tudo bem?!`

console.log(saudacao('Maria'))

const soma = (...numeros) => {

let soma = 0
    for(let n of numeros) {


        soma += n

     
    }
    return soma
}

console.log(soma(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))
console.log(soma(1, 2, 3, 4, 5, 6, ))
console.log(soma(1, 2, 3, 4))
*/

const potencia = (base) => {
    return exp => {
    return Math.pow(base, exp)
    }
    }
    const potenciaDe2 = potencia(2)
    
    console.log(potenciaDe2(8))


// this


Array.prototype.ultimo = function() {

    console.log(this[this.length - 1])
}

Array.prototype.primeiro = function() {

    console.log(this[0])
}

const numeros = [1, 2, 3, 500]

numeros.ultimo()

numeros.primeiro()

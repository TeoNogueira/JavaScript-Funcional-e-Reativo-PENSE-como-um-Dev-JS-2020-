function addCalc(fn, ...juntar) {


    return function addCalc(text) {

      
       return fn(...juntar)

    }

}


function calc(a, b, c) {

return a + b + c

}


const total = addCalc(calc, 50, 30, 20)('')

console.log(total)


/// //
//Object.freeze 

// DESESTRUTURA + ATRIBUIÇÃO
const obj = {

    nome: 'False', city: 'Recife', age: 25
}


function addThings(...esseNome) {

return `${esseNome.nome = 'True'} ${esseNome.city = 'Tokyo'}`

}


const resultThings = addThings(`${obj}`)

console.log(resultThings)



//CLONAR OBJETO >>>> DESESTRUTURA + RestSpread + ATRIBUIÇÃO 
function addThingsModeDesecAndRestSpread() {

const desecObj = {...obj}

desecObj.nome = 'Olimpic'
desecObj.age = 149


return desecObj

}


console.log(addThingsModeDesecAndRestSpread())


console.log(obj)
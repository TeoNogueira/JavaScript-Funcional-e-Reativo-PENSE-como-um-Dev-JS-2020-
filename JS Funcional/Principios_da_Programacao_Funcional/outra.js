function addRest(fn, ...calc) {

return function add(texto) {


return `${fn(...calc)}`

}

}


function somar(a, b) {

return a + b

}

const response = addRest(somar, 50, 150)('')



console.log(response)
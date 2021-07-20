function addRoots(fn, ...tx) {

return function add(texto) {

return `${fn(...tx)}`

}

}


function calc(a, b, c, d, e) {


    return a * b + c - d * e
}


const r1 = addRoots(calc, 50, 38, 500, 4000, 2)('')


console.log(`Resposta do cálculo: ${r1}`)
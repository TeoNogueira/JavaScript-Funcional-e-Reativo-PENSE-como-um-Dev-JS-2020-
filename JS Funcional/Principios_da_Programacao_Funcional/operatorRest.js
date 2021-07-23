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




function multAndTotal(a, b, c, d, e, f) {



    return a * b + c - d * e / f

}


const total = multAndTotal(50, 40, 40, 50, 60, 5)


console.log(`Total da compra: ${total}`)
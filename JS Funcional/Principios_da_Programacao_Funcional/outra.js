function addFnRest(fn, ...rest) {

return function add(text) {

return fn(...rest)

}

}


function totalCalc(a, b, c, d, e, f) {

return a + b + c - d + e * f

}


const r1 = addFnRest(totalCalc, 50, 100, 120, 220, 500, 555 )('');

const nomeSaldo =   `Olá esse é o seu saldo atual: ${r1}` 
console.log(nomeSaldo)
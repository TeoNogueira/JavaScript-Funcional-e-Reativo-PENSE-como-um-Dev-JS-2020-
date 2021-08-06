function addFnRest(fn, ...rest) {

    return function add(text) {

        return fn(...rest)
    }

}

function addCalcMaxmimumAndX(a, b, c, d, e) {

return a + b + c + d * e

}

function addCalcMinimumX(a, b, c, d, e) {

    return a - b - c - d * e

}

const total = addFnRest(addCalcMaxmimumAndX, 50, 100, 500, 9800, 500)('')
const totalTwo = addFnRest(addCalcMinimumX, total, 500, 4000, 100, 200)('')

console.log(total)

//PROMISE
const test = new Promise(function(makePromise) {

makePromise({result: totalTwo})

})

//

test.then(function(valor){

setTimeout(function() {
    console.log(valor.result)

}, 5000)

})
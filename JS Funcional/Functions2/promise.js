let p = new Promise(function(cumprirPromessa) {

cumprirPromessa({x:3, y:25})  // 
})

console.log(typeof p)

// quando a promessa for cumprida ele passará o valor 3 e 4 ou 3 ou 4 dependendo da chamada na console de acordo com os objetos

p.then(function(valor) {

console.log(valor.x, valor.y)


})

//// --- -x-- -----x-- ---x-- ---x-- --x-- ---x- ---x-- --


function addFnRest(fn, ...rest) {



    return function add(text) {


        return fn(...rest)
    }

}

function addCalcMoreAndX(a, b, c, d, e) {


return a + b + c + d * e

}



function addCalcMinimumX(a, b, c, d, e) {




    return a - b - c - d * e

}



const total = addFnRest(addCalcMoreAndX, 50, 100, 500, 9800, 500)('')
const totalTwo = addFnRest(addCalcMinimumX, total, 500, 4000, 100, 200)('')

console.log(total)
console.log(totalTwo)

const test = new Promise(function(makePromise) {


makePromise({result: totalTwo})

})


test.then(function(valor){

setTimeout(function() {
    console.log(valor.result)

}, 10000)


}) 
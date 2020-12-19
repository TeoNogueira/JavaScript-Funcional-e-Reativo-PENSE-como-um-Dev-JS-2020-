// somar (3) (4) (5)

//calcular 



function somar(a) {


  return function(b) {
        return function(c) {
            return a + b + c
         }

    }

}
const test = somar(3)(9)
console.log(test(5))


//--------------------x---------------x--------------------

//desafio 2: 




function calcular(x) {

return function(y) {

    return function(fn) {


        return fn(x, y)
    }
}


}

function subtrair(a, b) {
return a - b

}


function multiplicar(a, b) {
return a * b

}

const r1 = calcular(10)(6)(multiplicar)

console.log(r1)

const r2 = calcular(10)(6)(subtrair)
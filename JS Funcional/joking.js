/*let parm = function(x) {

    return function(y) {
    return function (fn) {

    return fn(x, y)

    }
}
}

function sub(a, b) {

return a - b

}

function div(a, b) {

    return a / b

}

let divs = parm(20)(5)(div)

console.log(divs)

let subs = parm(20)(2)(sub)

console.log(subs)*/

//exercitando
/*

function liberar(x) {


return function(y) {

return function(fns) {


return fns(x, y)

}

}

}

function somar(a, b) {

return a + b

}

let libs = liberar(100)(150)(somar)

console.log(libs)

function traga(){


    if(libs === 250) {


        console.log("verdadeiro")
    }
    else{ console.log("falso")}
}

traga()


let traga = traga()

function x() {


    if(traga === true) {

        return false
    }
}
*/
/*

function retornos(x) {

    return function(y) {


        return function(fn) {


            return fn(x, y)
        }
    }
}

function somar(a, b) {

    return a + b
}

function sub(a, b) {

return a - b
}

function mult(a, b) {


    return a * b


}
let sgo = retornos(500)(1000)(somar)

console.log(sgo)


let multi = retornos(500)(224)(mult)

console.log(multi)*/


// console

function receber(x) {


    return function(y) {


        return function(fn) {

            return fn(x, y)
        }
    }
}


function sub(a, b) {


    return a - b
}


let belo = receber(25000)(2000)(sub)

console.log(belo)
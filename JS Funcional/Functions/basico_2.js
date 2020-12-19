function bomDia() {


    console.log('bom dia!')
}


const boaTarde = function abc() {


console.log('Boa Tarde')
}


// passar uma funçao como parametro para outra funçao
// no caso o if vê se é verdade o valor e o tipo function depois de verificar verdadeiro ele invoca atraves
//do parametro fn sendo a invocação de função fn()
function executarQualquerCoisa(fn) {
 if(typeof fn == 'function') {

    fn()
 }
    //fn()
}

executarQualquerCoisa(3)

executarQualquerCoisa(bomDia)

executarQualquerCoisa(boaTarde)



function potencia(base) {
return function(exp) {
return Math.pow(base, exp)
}
}
const potenciaDe2 = potencia(2)

console.log(potenciaDe2(8))
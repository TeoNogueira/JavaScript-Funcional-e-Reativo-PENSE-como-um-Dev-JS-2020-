//Funções que operam em outras funções
// tomando-as como argumentos ou retornando-as.


function executar(fn, ...params) {

    return function add(textoInicial) {

        return `${textoInicial} ${fn(... params)}`

    }

}

function somar(a, b, c) {

return a + b + c

}


function mult(a, b) {


return a * b

}

const r1 = executar(somar, 4, 5, 6)('O resultado é') 
const r2 = executar(mult, 4,5)('||||| MULTIPLICAÇÃO IGUAL A')

console.log(r1, r2)



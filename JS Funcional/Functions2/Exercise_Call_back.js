function composicao(...funcoes) {
//fn3 passando o resultado da fn2 e fn1
return function x(valor) {

return funcoes.reduce((acc, fn) => {

return fn(acc)

}, valor)
 
}

}


function gritar(texto) {

return texto.toUpperCase()  


}


function enfatizar(texto) {

return `${texto}!!!!`

}

function tornarLento(texto) {

return texto.split('').join(' ')

}

const exagerado = composicao(
    gritar,
    enfatizar,
    tornarLento
    ) 

    const testFunc = composicao(
        gritar,
       tornarLento
        ) 
    

    
console.log(exagerado('Acabe com eles Valor!'), testFunc('Wheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeu'))

console.log(exagerado(enfatizar(('Wheeeeu'))))

console.log(testFunc(tornarLento(`aaaaaah ${exagerado(enfatizar(''))}`)))

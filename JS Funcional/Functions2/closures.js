// Closure é quando uma funçao lembra,
// do seu escopo léxico, mesmo quando a função
// é executada fora desse escopo léxico.
// Escopo léxico é o escopo onde a função foi definida fisicamente dentro do código,
// ex: uma função dentro da outra, a função anterior é o escopo léxico para aquela que está dentro.


const somando = require('./closure_escopo')

console.log(somando())

 
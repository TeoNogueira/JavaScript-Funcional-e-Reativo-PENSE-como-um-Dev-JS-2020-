let p = new Promise(function(cumprirPromessa) {

    cumprirPromessa({x:3, y:4})  // 
    })
    
    console.log(typeof p)
    
    // quando a promessa for cumprida ele passará o valor 3 e 4 ou 3 ou 4 dependendo da chamada na console de acordo com os objetos

    
    //arrowF
    p.then((valor) => console.log(valor/*.x*/))

// --- -x-------  x--



let b = new Promise(function(vemP) {

vemP(['um', 'dois', 'tres', 900])
    
})

console.log(typeof b)


b.then((receberValor) => console.log(receberValor))


// - -- --- x--x-x-x-x-x---x-x-x-


let dados = new Promise(function(arraysDados) {

arraysDados(['Teo', '30', 'Dev', 'Drummer'])

})


dados
.then(valor => valor[3])
.then(primeiro => primeiro[6])
.then(letra => letra.toLowerCase())
.then(letraMinuscula => console.log(letraMinuscula))

// -- --- --- ---- -

let addPromise = new Promise(function(a) {


    a([{camisa: 'Nike', tamanho: 'G', cor: 'cinza/branco/preto', origin: 'China', }])
})

console.log(typeof a)



addPromise
.then(valor => console.log(valor))



// --- 


let promessa = new Promise(function(puxandoPromessa) {

puxandoPromessa(['Teste Concluído', '2', '3'])


})

console.log(typeof puxandoPromessa)


promessa.then(valor => console.log(valor[0])) // puxando a casa numero 1 de um Array "no caso 0"


/* callback dentro de callback

setTimeout(function() {

//console.log('JavaScript Win...')

setTimeout(function() {


    //console.log('RxJS WIN....')
}, 2000)

setTimeout(function() {

   // console.log('Call back...')
}, 4000)

}, 2000) */

// resolver com promises

function esperarPor(tempo = 2000) {

return Promise(function(resolve) {


    setTimeout(function() {
console.log('Executando  promise ...')

        resolve()
    }, tempo)
})

}





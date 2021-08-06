//CONTEÚDO DE EXTREMA IMPORTÂNCIA.. 
// ASYNC/AWAIT SUBSTITUE O .THEN


function esperarPor(tempo = 2000) {

    return new Promise(function(resolve) {

      setTimeout(function() {

           console.log('Executando a promise...')
           resolve()


      }, tempo)

    })
}

/*
esperarPor(2000)
.then(() => console.log('executando promise 1...'))
.then(esperarPor) // acrescenta mais dois segundos
.then(() => console.log('Executando promise 2...'))
.then(esperarPor) // ''   '   '''''    '  ' ' ' ' ' ' ' ' '
.then(() => console.log('Executando promise 3...')) */

function retornarValor() {


    return new Promise(resolve => {

      setTimeout(() => resolve(10), 5000) //valor 10, 5k segundos

    })
}

// ---- ----

async function retornarValorRapido() {

    return 20 // retorna o 20 dentro de uma promise
    // como se estivesse chamando o resolve rapidamente

}


async function executar() {
    
    let valor =  await retornarValorRapido()
   await esperarPor(1500) //quando insiro o await ele executa primeiro e depois respeita o tempo do próximo await// podemos afirmar também como uma espécie de pausa.
   //--- x ---//
   // por trás de uma async/await deve existir uma promise
console.log(`Async/await... ${valor}`)
await esperarPor(1500)
console.log(`Async/await... ${valor + 1}`)
await esperarPor(1500)
console.log(`Async/await... ${valor + 2}`)

return valor + 3

}

//node não suporta chamar o await dentro de um módulo dele
// quando saio do mundo de assincronismo e entro no síncrono tenho que usar o: .then
// Quando existe async/await ... não preciso usar o .then

async function executarDeVerdade() {

  const valor =  await executar()
  console.log(valor)


}


executarDeVerdade()






// resolver com promises (substituindo o callback Hell)

function esperarPor(tempo = 2000) {

    return new Promise(function(resolve) {
    
    
        setTimeout(function() {
    console.log('Executando  promise ...')
    
            resolve('visshhh')
        }, tempo)
    })
    
    }



// esperarPor(3000).then(texto => console.log(texto))
esperarPor()
.then(() => esperarPor())
.then(esperarPor)
.then(esperarPor) //posso fazer infinito 


function gerarNumerosEntre(min, max, numerosProibidos) {


    if(min > max) {

     /*destructure*/ [max, min] = [min, max] // Array
        //const [x, y, z] = a
    }

return new Promise((resolve, reject) => {

    const fator = (max - min + 1)
const aleatorio = parseInt(Math.random() * fator) + min

if(numerosProibidos.includes(aleatorio)) {
            reject('Número Repetido')

        } else {   
            resolve(aleatorio)
        
}

resolve(aleatorio)

})


}


async function gerarMegoSena(qtdeNumeros, tentativas = 1) {
 const numeros = []

 try {

    for(let _ of Array(qtdeNumeros).fill()) {
        numeros.push(await gerarNumerosEntre(1, 60, numeros))

 }
 return numeros

}
catch(e) { 

    if(tentativas > 100) {

        throw "Nao deu certo"

    } else {

gerarMegoSena(qtdeNumeros, tentativas + 1 )


        }
    }
}




gerarMegoSena(15).then(console.log)
.catch(console.log)




gerarNumerosEntre(1, 5, [1, 2, 4])
.then(console.log)
.catch(console.log)
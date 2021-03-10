function GerarNumerosEntre(min, max) {


    if(min > max) {

     /*destructure*/ [max, min] = [min, max] // Array
        //const [x, y, z] = a
    }

return new Promise(resolve => {

    const fator = (max - min + 1)
const aleatorio = parseInt(Math.random() * fator) + min
resolve(aleatorio)

})


}


GerarNumerosEntre(1, 70)
.then(num => num * 10)
.then(numX10 => `O númerro foi gerado ${numX10}`)
.then(console.log)
// lógica de minimo e maximo com promises chamadas 
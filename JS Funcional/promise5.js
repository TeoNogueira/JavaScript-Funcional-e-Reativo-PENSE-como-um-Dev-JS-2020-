function GerarNumerosEntre(min, max, tempo) {


    if(min > max) {

     /*destructure*/ [max, min] = [min, max] // Array
        //const [x, y, z] = a
    }

return new Promise(resolve => {
setTimeout(function(){
    const fator = (max - min + 1)
    const aleatorio = parseInt(Math.random() * fator) + min
    resolve(aleatorio)
    

}, tempo)
    
})


}

function gerarVariosNumeros() {


    return Promise.all([
        GerarNumerosEntre(1, 70, 1000),
        GerarNumerosEntre(1, 70, 4000),
        GerarNumerosEntre(1, 70, 6000),
        GerarNumerosEntre(1, 70, 7000),


    ])
   

}

console.time('promise')
gerarVariosNumeros()
.then(numeros => console.log(numeros))
.then(() => {

console.timeLog('promise')
console.timeEnd('promise')
})



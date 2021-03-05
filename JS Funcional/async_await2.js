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
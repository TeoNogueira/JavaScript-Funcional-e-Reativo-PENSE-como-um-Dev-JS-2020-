//impura


function generateRandomNumber(min, max) {

const fator = max - min + 1

return parseInt(Math.random() * fator) + min

}


console.log(generateRandomNumber(1, 1000))

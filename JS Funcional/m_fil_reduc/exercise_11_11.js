let sucosInMarket1 = ['banana', 'maça', 'uva', 'pêra', 'manga', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];


let sucosInMarket2 = ['jaca', 'mamão', 'limão', 'pitanga', 'melão', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];


//Gerando frases para palavras femininas e masculinas

// filtrando tudo que seja diferente de acerola e sapoti

// inclusão do sinal de ponto(.) no final do array e gerando a lista


const createWords = sucosInMarket1.filter(item => item !== 'sapoti' && item !== 'acerola').reduce((acc, item, index, array) => {

const MaleOrFemale = /a$/.test(item) ? 'a' : 'o';

const normalPhrase = 'Compramos'


if(index === array.length -1) {

return acc + `${normalPhrase} ${MaleOrFemale} ${item}.`

}
return acc + `${normalPhrase} ${MaleOrFemale} ${item},\n `

}, 'Lista de frutas compradas:\n\n')

console.log(createWords)




// filtrando os que separecem, menos o sapoti


const compare = sucosInMarket1.filter(item => item !== 'sapoti' && sucosInMarket2.includes(item)).reduce((acc, item) => `${acc} - ${item}\n`, 'Frutas semelhantes sem o sapoti:\n\n');


console.log(compare)


// const arr = [


//     {nome: 'Fernando', age: 19, sexo: 'M', estado: 'Pernambuco'},
//     {nome: 'Teo', age: 31, sexo: 'M', estado: 'Alagoas'},
//     {nome: 'Tiago', age: 17, sexo: 'M', estado: 'Roraima'},
//     {nome: 'Joana', age: 28, sexo: 'F', estado: 'Roraima'},
//     {nome: 'João', age: 15.5, sexo: 'M', estado: 'Roraima'},
//     {nome: 'Gerusa', age: 14, sexo: 'F', estado: 'Roraima'},
//     {nome: 'Júlia', age: 13, sexo: 'F', estado: 'Amazonia'},
//     {nome: 'Evellyn', age: 18, sexo: 'F', estado: 'Amapá'},
//     {nome: 'Ana', age: 30, sexo: 'F', estado: 'Rio Grande Do Sul'},
//     {nome: 'Gustavo', age: 18, sexo: 'M', estado: 'Alagoas'},

// ];



// const quantityFemale = arr.filter(item => item.sexo ).reduce((acc, {sexo}) => {

// acc[sexo] = acc[sexo] + 1 || 1;


// return acc



// }, {})

// console.log(quantityFemale)



// const resultAgeForbidden = arr.filter(item => item.age < 18 && item.Estado === 'Roraima').reduce((acc, { nome}) => `${acc} - ${nome}\n`, 'Nomes:\n\n');

// console.log(resultAgeForbidden);


// function invoke(param1, key) {

// return param1.reduce((acc, item) => {

// if(!acc[item[key]]) {

// acc[item[key]] = []

// }

// acc[item[key]].push(item)

// return acc

// }, {})



// }


// const showInvokeFunction = invoke(arr, 'estado');


// console.log(showInvokeFunction)
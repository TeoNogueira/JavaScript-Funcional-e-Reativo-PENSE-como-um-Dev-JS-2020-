
const arr = [


    {nome: 'Fernando', age: 19, sexo: 'M', Estado: 'Pernambuco'},
    {nome: 'Teo', age: 31, sexo: 'M', Estado: 'Alagoas'},
    {nome: 'Tiago', age: 17, sexo: 'M', Estado: 'Roraima'},
    {nome: 'Joana', age: 28, sexo: 'F', Estado: 'Roraima'},
    {nome: 'João', age: 15.5, sexo: 'M', Estado: 'Roraima'},
    {nome: 'Gerusa', age: 14, sexo: 'F', Estado: 'Roraima'},
    {nome: 'Júlia', age: 13, sexo: 'F', Estado: 'Amazonia'},
    {nome: 'Evellyn', age: 18, sexo: 'F', Estado: 'Amapá'},
    {nome: 'Ana', age: 30, sexo: 'F', Estado: 'Rio Grande Do Sul'},
    {nome: 'Gustavo', age: 18, sexo: 'M', Estado: 'Alagoas'},

];


const roraimaForbiddenSeventeen = arr.filter(item => item.age < 18).reduce((acc, {nome}) => `${acc} - ${nome}\n`, 'Roraima menores de 18:\n\n')



console.log(roraimaForbiddenSeventeen)



// GENERATE ALL IN FUNCTION


function resultFinal(arrayObjInConst, key ) {

    return arrayObjInConst.reduce((acc, item) => {

            if(!acc[item[key]]) {

                acc[item[key]] = []
            };

                acc[item[key]].push(item);

            return acc 

    }, {});

};

const generateFunc = resultFinal(arr, 'sexo')


console.log(generateFunc)



// const resultFilter = arr.filter(item => item.Estado === 'Roraima').reduce((acc, { nome } ) => `${acc} - ${nome}\n`, 'Lista:\n')

// console.log(resultFilter)

// const resultFilterAndReduce = arr.filter(item => item.Estado === 'Roraima').reduce((acc, {sexo}) => {

// acc[sexo] = acc[sexo] + 1 || 1;

// return acc

// }, {})


// console.log(resultFilterAndReduce)




// function resultData(firstParam, key) {


// return firstParam.reduce((acc, item) => {

//     if(!acc[item[key]]) {
    
//         acc[item[key]] = []
    
//     };
    
//     acc[item[key]].push(item)
    
//     return acc
    
//     }, {});
    
// };


// const result = resultData(arr, 'Estado');

//     console.log(result);

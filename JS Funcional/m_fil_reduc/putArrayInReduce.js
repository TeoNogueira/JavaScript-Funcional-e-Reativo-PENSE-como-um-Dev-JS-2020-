

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



// const putInListDataReduce = arr.reduce((acc, item) => {

// if(!acc[item.Estado]) {

// acc[item.Estado] = []

// }
// acc[item.Estado].push(item)


// return acc
    
// }, {})


// console.log(putInListDataReduce)





function generateData(firstParam, key) {

    return firstParam.reduce((acc, item) => {

        if(!acc[item[key]]) {
        
        acc[item[key]] = [];
        
        }
        
        acc[item[key]].push(item)
        
        return acc
        
        
        }, {});

}


const resultData = generateData(arr, 'sexo')


console.log(resultData)

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




const listRoraima = arr.filter(item => item.Estado === 'Roraima').reduce((acc, {nome}) => `${acc} - ${nome}\n`, 'Pessoas de Roraima:\n\n')


console.log(listRoraima)



function desecAll(param1, key) {

   return param1.reduce((acc, item) => {

      if(!acc[item[key]]) {

        acc[item[key]] = []

      }
      acc[item[key]].push(item)

        return acc

    }, {});

}


const result = desecAll(arr, 'Estado')


// console.log(result)


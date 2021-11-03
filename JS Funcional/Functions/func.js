let list = [{


name: 'Teo', cidade: 'Recife', age: '31'

}]


let list2 = [{

name: 'Jessé', cidade: 'Recife', age: '38'


}]


const list1 = list.map(item => `Nome: ${item.name}, Idade: ` + item.age)

const list_2 = list2.map(item => `Nome: ${item.name}, Idade: ` + item.age)



function soma(a, b) {


    return a + b
}



const result = soma(`${list1} | `, list_2) 


console.log(result)


const materials = ['caneta', 'lapiseira', 'caderno', 'lapis', 'hidrocor', 'bolsa']




const resultMaterials = materials.reduce((acc, item, index, array) => {

const goodOrNot = /a$/.test(item) ? 'é boa' : 'é bom'

const firstVogal = /a$/.test(item) ? 'a' : 'o';

if(index === array.length -1) {

    return acc + `${firstVogal} ${item} ${goodOrNot}.`

}


return acc + `${firstVogal} ${item} ${goodOrNot}, `


},'')

console.log(resultMaterials)

//uso do regex pra tratativa verdadeira ou falsa final e começo de textos
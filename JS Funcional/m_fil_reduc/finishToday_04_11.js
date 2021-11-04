

// const cart = [

//     {nome: 'Test1', price: 50},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test5', price: 500},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test1', price: 50},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test2', price: 150},
//     {nome: 'Test3', price: 30},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
//     {nome: 'Test4', price: 20},
// ]



// const listResultTrue = cart.filter(item => item.price < 500).reduce((acc, {nome}) => `${acc} - ${nome}\n`,'Preços abaixo de 500:\n\n');


// console.log(listResultTrue)

// const quantityMessage = 'a quantidade de todos os preços repetidos são: '


// const resultQuantity = cart.reduce((acc, { price }) => {

//     acc[price] = acc[price] + 1 || 1

// return acc
// }, {});

// console.log(quantityMessage, resultQuantity)




// const result = cart.reduce((acc, item) => {
//     return acc + item.price
// }, 0);


// console.log(result)
//todo valor é 5440

// const valueTwentyresult = cart.filter(item => item.price === 20).reduce((acc, item) => acc + item.price, 0);


// console.log(valueTwentyresult)


//valores total identico a 20




//Logical List Gender Female Or Male simple;


// const objects = ['camisa', 'bolsa', 'cama', 'guarda-roupa', 'lençol', 'short', 'calça']



//Refatoring code:


const objects = ['camisa', 'bolsa', 'cama', 'guarda-roupa', 'lençol', 'short', 'calça']



const result = objects.reduce((acc, item, index, array) => {

   const  genderMaleOrFemaleObj = /a$/.test(item) ? 'A' : 'O';
  
 const arrayLength = index === array.length - 1

const itemAndFinishArray =  acc + `${genderMaleOrFemaleObj} ${item} está na lista da mudança`

return arrayLength ? `${itemAndFinishArray}.` : `${itemAndFinishArray}, \n`


}, '');

console.log(result);






// const result = objects.reduce((acc, item, index, array) => {

//    const  genderMaleOrFemaleObj = /a$/.test(item) ? 'A' : 'O';
  

// if(index === array.length - 1) {

//     return acc + `${genderMaleOrFemaleObj} ${item} está na lista da mudança.`

// }

// return acc + `${genderMaleOrFemaleObj} ${item} está na lista da mudança,\n `


// }, '');

// console.log(result);

//FINISH REDUCE



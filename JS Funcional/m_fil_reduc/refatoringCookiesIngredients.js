
const ingredients = ['frango', 'tomate', 'cebola', 'cogumelo'];


const cookiesIngredients = ingredients.reduce((acc, item, index, array) => {

const correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido'

 /*regex + if Ternary*/ 
// item[item.length -1] ===       <<<<< o que funciona por trás de uma regex

const isLastItem = index === array.length -1

const ingredientMessage =   acc + `${item} ${correctWordGender}`

return isLastItem ? `${ingredientMessage}.`: `${ingredientMessage}, `


}, '');


console.log(cookiesIngredients)


// Regex puxa o último digito de um item /a$/.test(item) ? 'cozida' : 'cozido';



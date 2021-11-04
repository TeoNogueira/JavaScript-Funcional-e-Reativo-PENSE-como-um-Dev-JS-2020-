
const ingredients = ['frango', 'tomate', 'cogumelo', 'cebola'];


const cookiesIngredients = ingredients.reduce((acc, item, index, array) => {

const correctWordGender = /a$/.test(item) ? 'cozida' : 'cozido'
 /*regex + if Ternary*/ 
// item[item.length -1] ===       <<<<< o que funciona por trás de uma regex
    if(index === array.length -1) {

        // console.log(`Ultimo item: ${item}`);
        return acc + `${item} ${correctWordGender}. `

    }
    
    return acc +` ${item} ${correctWordGender}, `


}, '');


console.log(cookiesIngredients)


// Regex puxa o último digito de um item /a$/.test(item) ? 'cozida' : 'cozido';



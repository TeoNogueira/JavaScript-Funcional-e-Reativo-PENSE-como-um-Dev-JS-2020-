const cart = [

{nome: 'Button azul', price: 95.55},
{nome: 'Button vermelho', price: 125.55},
{nome: 'Button cinza', price: 205.55},
{nome: 'Button Aqua', price: 75.55},

]



const fill = cart.filter(item => item.price < 120).reduce((acc, item) =>  
    acc + item.price

, 0)


const destructName = cart.reduce((acc, { nome } ) => `${acc} - ${nome}\n`, '')


const thanks = `Obrigado pela Aula!`

const term = destructName + `\n ${thanks}`

console.log(term)

console.log(fill)
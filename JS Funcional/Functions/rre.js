let memoryCard = [

    {name: 'jose', validate: 35},
    {name: 'joao', validate: 25},
    {name: 'teo', validate: 15},
    {name: 'celia', validate: 25},
    {name: 'Jessé', validate: 25},
    {name: 'Fernando', validate: 25},
    {name: 'Gil', validate: 35},
    {name: 'Antonio', validate: 25},
    {name: 'Evellyn', validate: 25},
    {name: 'Maria', validate: 25},
    {name: 'Ana', validate: 15},
]



// const quantityValidate = memoryCard.reduce((acc, { validate }) => {

// acc[validate] = acc[validate] + 1 || 1;


// return acc


// }, {})


const quantityValidate2 = memoryCard.reduce((acc, { name }) => `${acc}\n - ${name}\n`, '');


console.log(quantityValidate2)

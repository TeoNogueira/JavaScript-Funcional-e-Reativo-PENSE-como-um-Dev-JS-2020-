

let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: true },
    {store: 'Faaca', open: true },
    {store: 'Zen', open: true },
    {store: 'BurguerKing', open: true },

];



const mappingTrueOrFalse = ifoodStores.filter(item => item.open === true).reduce((acc, {store} ) => {

    return `${acc} - ${store}\n`

},'Restaurantes abertos:\n\n')


const quantityOpenOrClosed = ifoodStores.reduce((acc, {open}) => {

    acc[open] = acc[open] + 1 || 1
        return acc
    
    }, {});

console.log(quantityOpenOrClosed)

console.log(mappingTrueOrFalse)
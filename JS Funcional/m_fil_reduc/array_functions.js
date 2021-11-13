
let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: true },
    {store: 'Faaca', open: true },
    {store: 'Zen', open: true },
    {store: 'BurguerKing', open: true },

];


const openForced = ifoodStores.filter(item => {      
       
    ifoodStores[0].open = true
    
    return item.open

      })
     .reduce((acc, {store}) =>
      `${acc} - ${store}\n`, 'Restaurantes agora abertos:\n\n');

console.log(openForced)


let rodizio = [

    {store: 'PizzaAtlant', open: false },
    {store: 'Macunaima', open: false },
    {store: 'Zen', open: false },
    {store: 'BurguerDoce', open: true },
    {store: 'China24Hrs', open: true },
    {store: 'Dominus', open: true },

];



const trueFilter = rodizio.filter(item => item.open === true).reduce((acc, {store}) => acc + `- ${store}\n`, 'Restaurantes abertos:\n\n');

console.log(trueFilter)


let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: true },
    {store: 'Faaca', open: true },
    {store: 'Zen', open: true },
    {store: 'BurguerKing', open: true },

];




const mapping = ifoodStores.filter(item => item.open === false).map(item => item.store)


console.log(mapping)
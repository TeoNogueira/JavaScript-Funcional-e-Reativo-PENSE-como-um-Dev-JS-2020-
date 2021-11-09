// let ifoodStores = [

//     {store: 'Habbibs', open: false },
//     {store: 'McDonalds', open: true },
//     {store: 'Giraffas', open: false },
//     {store: 'Faaca', open: false },
//     {store: 'Zen', open: false },
//     {store: 'BurguerKing', open: true },

// ];


// let sucosInMarket1 = ['banana', 'maça', 'uva', 'pêra', 'manga', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];



// let sucosInMarket2 = ['Jaca', 'mamão', 'limão', 'pitanga', 'melão', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];


// // Lista 1 test 

// const total = sucosInMarket1.reduce((acc, item, index, array) => {

// const initialText = /a$/.test(item) ? 'A' : 'O';

// const testifyGoodOrNot = /a$/.test(item) ? 'é boa!' : 'é bom!'




//     if(index === array.length -1) {


//         return acc + ` ${initialText} ${item} ${testifyGoodOrNot}.`

//     }




// return acc + ` ${initialText} ${item} ${testifyGoodOrNot},`

// }, '')



//     console.log(total)




let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: false },
    {store: 'Faaca', open: true },
    {store: 'Zen', open: true },
    {store: 'BurguerKing', open: true },

];




const readStore = ifoodStores.filter(item => item.open === true).reduce((acc, {store}) => `${acc} - ${store}\n`, 'Lojas abertas:\n\n');




console.log(readStore)
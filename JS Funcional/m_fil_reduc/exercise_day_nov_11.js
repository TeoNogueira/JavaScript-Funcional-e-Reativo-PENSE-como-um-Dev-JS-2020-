// let listVideosEv = [


//     'Robots', 
//     'Matrix', 
//     'Narnia', 
//     'Harry Potter', 
//     'Hobbit', 
//     'War Planets', 
//     'Nemo', 
//     'League of justice', 
//     'Captain-America', 
//     'Jurassic park', 
    


// ];



// let listVideosT = [


//     'Roblox', 
//     'Matrix', 
//     'Narnia', 
//     'Harry Potter', 
//     'Hobbit', 
//     'Lord of the Rings', 
//     'X-men\'s', 
//     'League of justice', 
//     'Spider-man', 
//     'Jurassic park', 
   
//    ]



// const result = listVideosEv.filter(resultParm => listVideosT.includes(resultParm))


// console.log(result)


// let sucosInMarket1 = ['banana', 'maça', 'uva', 'pêra', 'manga', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];



// let sucosInMarket2 = ['Jaca', 'mamão', 'limão', 'pitanga', 'melão', 'sapoti', 'siriguela', 'cajá', 'graviola', 'acerola', 'laranja'];


// const resultPhraseAndGender = sucosInMarket1.reduce((acc, item, index, array) => {

// const genderMascAndFemale = /a$/.test(item) ? 'A' : 'O'

// const phraseMascAndFemale2 = /a$/.test(item) ? 'é boa' : 'é bom'

// if(index === array.length - 1) {


//     return acc + `${genderMascAndFemale} ${item} ${phraseMascAndFemale2}. `

// }


// return acc + `${genderMascAndFemale} ${item} ${phraseMascAndFemale2}, `


// }, '');





// const consult = sucosInMarket1.filter(testSucoParam => sucosInMarket2.includes(testSucoParam))

// console.log(consult);

// console.log(resultPhraseAndGender);




let ifoodStores = [

    {store: 'Habbibs', open: false },
    {store: 'McDonalds', open: true },
    {store: 'Giraffas', open: false },
    {store: 'Faaca', open: false },
    {store: 'Zen', open: false },
    {store: 'BurguerKing', open: true },

];



// const result =ifoodStores.reduce((acc, {open}) => {

//    acc[open] = acc[open] + 1 || 1;
   
//    return acc

// }, {})


// console.log(result);






// const result = ifoodStores.filter(item => item.open === true).reduce((acc, {store}) => `${acc} - ${store}\n`, 'Lojas abertas:\n ');


// console.log(result);



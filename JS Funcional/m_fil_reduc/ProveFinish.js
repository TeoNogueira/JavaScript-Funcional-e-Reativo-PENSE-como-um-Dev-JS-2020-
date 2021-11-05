const cart = [

    {nome: 'Button azul', price: 95, ok: ''},
    {nome: 'Button azul', price: 95, ok: ''},
    {nome: 'Button azul', price: 95, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button cinza', price: 205, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button cinza', price: 205, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    
    ];



//--------------------------------------------------------------------------------    
//total: 1845
// repetidos prices quantos tem: { '75': 7, '95': 3, '125': 5, '205': 2 }
// gerar lista de nomes: OK!
// a soma de todos os 75: 525
// repetidos nomes quantos tem:{ 'Button azul': 3,'Button vermelho': 5, 'Button cinza': 2, 'Button Aqua': 7}

//------------------------------------------------------------------------------


    // const dataList = cart.reduce((acc, item) => acc + item.price, 0);

    // console.log(dataList);


    // const generateListName = cart.reduce((acc, { nome }) => `${acc} - ${nome}\n`, 'Lista de nomes:\n\n');

    // console.log(generateListName);

//     const repeatsValue = cart.reduce((acc, {price}) => {

// acc[price] = acc[price] + 1 || 1

// return acc

//     }, {})


// console.log(repeatsValue)


// const resultFilter = cart.filter(item => item.price === 75).reduce((acc, item) => acc + item.price, 0);


// console.log(resultFilter);


const resultAllNamesRepeat = cart.reduce((acc, {nome}) => {

acc[nome] = acc[nome] + 1 || 1;


    return acc
}, {})

console.log(resultAllNamesRepeat)

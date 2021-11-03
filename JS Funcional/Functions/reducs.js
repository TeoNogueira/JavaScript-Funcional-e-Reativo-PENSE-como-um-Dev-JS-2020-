const cart = [

    {nome: 'Button azul', price: 95, ok: ''},
    {nome: 'Button vermelho', price: 125, ok: ''},
    {nome: 'Button cinza', price: 205, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
    {nome: 'Button Aqua', price: 75, ok: ''},
  
    // {price: 75 },
    // {price: 75 },
    // {price: 95 },
    // {price: 75 },
    // {price: 75 },
    // {price: 75 },
    // {price: 125 },
    // {price: 75 },
    // {price: 95 },
    // {price: 95 },
    // {price: 95 },
    // {price: 95 },
    // {price: 95 },
    // {price: 95 },
    // {price: 125 },
    // {price: 125 },
    // {price: 125 },

    
    ]




    const obtendoResultado = cart.reduce((acc, { nome }) => `${acc} - ${nome}\n`, '');
// 
    console.log(obtendoResultado);


    const obtendoQuantidadeDePrecos = cart.reduce((acc, { price }) => {

        acc[price] = acc[price] + 1 || 1


return acc


     }, {})


     console.log(obtendoQuantidadeDePrecos)
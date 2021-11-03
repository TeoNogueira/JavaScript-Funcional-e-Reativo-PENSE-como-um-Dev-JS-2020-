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
    
    ]


    const prisma = cart.reduce((accumulator, { price }) => {

     accumulator[price] =  accumulator[price] + 1 || 1

return accumulator

    }, {});


    console.log(prisma)
    
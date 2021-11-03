const cart = [

    {nome: 'Test1', price: 50},
    {nome: 'Test2', price: 150},
    {nome: 'Test3', price: 30},
    {nome: 'Test4', price: 20},
    {nome: 'Test5', price: 500}

]


const pist = [

    {nome: 'brazil', price: 50},
    {nome: 'italy', price: 150},
    {nome: 'french', price: 30},
    {nome: 'germany', price: 20},
    {nome: 'holand', price: 500}

]
    
    
function soma(a, b,) {


return a + '\n' + b 

    
}




const pegandoPist = pist.reduce((acc, {nome}) => `${acc} - ${nome}\n`, '')
    
    
    const pegandoCart = cart.reduce((acc, {nome}) => `${acc} - ${nome}\n`, '')
    
    
    const result = soma(pegandoPist, pegandoCart)
    
    console.log(result)
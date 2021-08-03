const carrinho = [
    {camisa: 'Nike', cor: 'azul', preco: 500, tamanho: 'M, G'}, 
    
    
    {camisa: 'Pumma', cor: 'vermelho', preco: 300, tamanho: 'P, M, G'}, 
    
    {camisa: 'Adidas', cor: 'azul', preco: 250, tamanho: 'M, G'}, 
    
    {camisa: 'Billabong', cor: 'branco/estampado', preco: 600, tamanho: 'M'}

]



const filtter = item => item.preco < 500

const getData = carrinho.filter(filtter).map(item => item.camisa)


console.log(getData)


//map 

const mapData = carrinho.map(item => item.preco).reduce((acc, item) => acc + item, 0).toFixed(2)

console.log(mapData)

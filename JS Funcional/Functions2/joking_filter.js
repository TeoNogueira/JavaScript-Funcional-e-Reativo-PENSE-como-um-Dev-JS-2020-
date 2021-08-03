const carrinho = [
    {camisa: 'Nike', cor: 'azul', preco: 500, tamanho: 'M, G'}, 
    
    
    {camisa: 'Pumma', cor: 'vermelho', preco: 300, tamanho: 'P, M, G'}, 
    
    {camisa: 'Adidas', cor: 'azul', preco: 250, tamanho: 'M, G'}, 
    
    {camisa: 'Billabong', cor: 'branco/estampado', preco: 600, tamanho: 'M'}

]

//-----x-------//

const getCor = item => item.cor
const maiorQQuinhentos = item => item.preco < 600
const precoAcima = carrinho.filter(maiorQQuinhentos)
.map(getCor)


 // mapeando o que está sendo puxado de acordo com a lógica de < 600


console.log(precoAcima)


const mapearCamisa = item => item.camisa 
const camisa = carrinho.map(mapearCamisa)

console.log(camisa)

const somaCamisaMaisTamanho = item => item.camisa + item.tamanho

const somaTotal = carrinho.map(somaCamisaMaisTamanho)

console.log(somaTotal)

// ---x --- -x------x---- //



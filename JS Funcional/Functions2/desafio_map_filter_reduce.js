const listaCoisas = [
 
    { fragil:false, camisa: 'Nike', cor: 'preto', qtde: 50, preco: 900.00}, 
    
    { fragil:false, bermuda: 'Billabong', cor: 'azul, preto, amarela', qtde: 1500, preco: 450.00} , 
    
    { fragil:true, relogio: 'Pumma', cor: 'preto', qtde: 100, preco: 250.00 },
     
    {fragil:false, bone: 'Razer', cor: 'preto, cinza, verde, azul, magenta', qtde: 200, preco: 100},
    { fragil:true, headphone: 'Dazz', cor: 'preto, branco, cinza', qtde: 200, preco: 400 }
    
    ]

    //reduce, filter, map,

     // true resolvido

/*
    const forVerdade = item => item.fragil >= true

    const tragaValor = listaCoisas.filter(forVerdade)

    console.log(tragaValor)


// total de quantidade * preço

const somaQtdePreco = item => item.qtde * item.preco 
const totalGeral = listaCoisas.map(somaQtdePreco)

console.log(totalGeral) //resolvido problema
*/

// outra forma de fazer a média, total, e true or false


const media = listaCoisas.filter(item => item.fragil)
.map(item => item.qtde * item.preco)
.reduce((acc, el) => {
const novaQtde = acc.qtde + 1
const novoTotal = acc.total + el
return {
    qtde: acc.qtde + 1,
     total: acc.total + el,
      media: novoTotal / novaQtde
}

}, {qtde: 0, total: 0, media: 0 }).media

console.log(media)



const listaCoisas = [
 
    {  
        camisa: 'Nike', cor: 'preto', qtde: 50, preco: 900.00
    }, 
    
    {
        bermuda: 'Billabong', cor: 'azul, preto, amarela', qtde: 1500, preco: 450.00
    } , 
    
    { 
        relogio: 'Pumma', cor: 'preto', qtde: 100, preco: 250.00
    },
     
    {
         bone: 'Razer', cor: 'preto, cinza, verde, azul, magenta', qtde: 200, preco: 100
     },
      { 
         headphone: 'Dazz', cor: 'preto, branco, cinza', qtde: 200, preco: 400
     }
    
    ]

//acumullador e elemento

    const getTotal = item => item.qtde * item.preco

    const somar = (acc, el) => {

        console.log(acc, el)
        return  acc + el // lembrando da importância do return quando a função tem um corpo >>> {}
    }

    const totais = listaCoisas.map(getTotal)

    console.log(totais)

    const totalGeral = totais.reduce(somar) // posso implementar um acumulador ao lado da constante somar ex: 0

console.log(`===>>> ${totalGeral}`)





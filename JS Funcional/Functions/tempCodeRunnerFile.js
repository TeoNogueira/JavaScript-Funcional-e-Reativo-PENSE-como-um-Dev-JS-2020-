    const obtendoQuantidadeDePrecos = cart.reduce((acc, { price }) => {

        acc[price] = acc[price] + 1 || 1


return acc


     }, {})


     console.log(obtendoQuantidadeDePrecos)
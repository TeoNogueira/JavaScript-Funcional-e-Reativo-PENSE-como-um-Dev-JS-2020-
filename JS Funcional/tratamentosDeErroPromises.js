function startOrNot(valor, fatalError) {


    return new Promise((resolve, reject) => {

     if(Math.random() < fatalError) {

      //gerar chance de error
      reject('Ocorreu um Erro')


     } else { resolve(valor) }


    })

}


startOrNot('Testando', 0.1) //chamadas de erro abaixo
.then(v => console.log(`Valor: ${v}`))
.catch(erro => console.log(`Erro:  ${erro}`)) 
.then(() => console.log('FIM!'))




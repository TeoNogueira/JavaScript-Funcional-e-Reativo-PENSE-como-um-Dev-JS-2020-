// funçao que retorna funçao
// vantagens: flexibilidade
//VALIDAÇÃO EXEMPLO: 


function textoComTamanhoEntre(min) {

return function(max) {

    return function(erro) {
      
        return function(texto) {
             // Lazy Evaluation
            const tamanho = (texto || '').trim().length

            if(tamanho < min || tamanho > max) {
                
                throw erro
     }

    }

   }

  }

 }



const p1 = {nome: 'A', preco: 14.99, desc: 0.25}


const mostrarTudo = textoComTamanhoEntre(4)(255)('Nome Invalido')(p1.nome)


console.log(mostrarTudo)
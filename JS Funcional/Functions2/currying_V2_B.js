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
 // MOSTRANDO NA PRÁTICA A IMPORTÂNCIA DO CURRYING, EXEMPLO CRIADO ABAIXO DE PODER UTILIZAR VÁRIAS VERSÔES

const forcarTamanhoPadrao = textoComTamanhoEntre(4)(255)

const forcarTerceiro = forcarTamanhoPadrao('Nome Invalido')
const p1 = {nome: 'A', preco: 14.99, desc: 0.25}

const mostrarTudo = forcarTerceiro(p1.nome)


console.log(mostrarTudo)
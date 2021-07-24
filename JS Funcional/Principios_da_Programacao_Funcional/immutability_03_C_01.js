const pessoa = {

    nome: 'Teo', cidade: 'Recife',
    end: {

        rua: 'Feliz!',
    }
}


 
///x/////x////////////////

function alterarPessoa(pessoa) {
    const essaPessoa = { ...pessoa } // clonando o Objeto

essaPessoa.nome = 'TEONOGUEIRA'
essaPessoa.cidade = 'NEW ZELAND'

return essaPessoa
 
}


const newData = alterarPessoa(pessoa)

 //IMPORTANTE: SE EU APENAS INVOCAR A FUNÇAO JUNTO COM O PARAMETRO PUXANDO PESSOA DO OBJETO ACIMA EX: alterarPessoa(pessoa) , NÃO FARÁ NADA APENAS TRARÁ RESULTADO COMUM DO OBJETO NORMAL
// ENVOLVA A FUNÇÃO NUMA CONSTANTE 

console.log(newData)
// Repare que foi clonado o objeto e mesmo assim ele continua intacto
console.log(pessoa)




///x/////x////////////////


// function pessoaAgora(essaPessoa) {
// console.log(`${essaPessoa.nome = 'TEONOGUEIRA'} ${essaPessoa.cidade = 'NEW ZELAND'}`
  
//     )

// }

// pessoaAgora(`${pessoa} funçao`)

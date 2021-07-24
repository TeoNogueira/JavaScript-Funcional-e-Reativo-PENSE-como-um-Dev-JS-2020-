const pessoa = {

    nome: 'Teo', cidade: 'Recife'
}

//Atribuição por referencia

const essaPessoa = pessoa

//-----x----x------x-----x---

essaPessoa.nome = 'TEONOGUEIRA'
essaPessoa.cidade = 'NEW ZELAND'

console.log(pessoa)
 
///x/////x////////////////

function pessoaAgora(essaPessoa) {
   
    return `${essaPessoa.nome = 'MUNIZ'} ${essaPessoa.cidade = 'NATAL'}`
  
}

const resultado = pessoaAgora(`${pessoa}`)

console.log(`${resultado}: função`)



///x/////x////////////////


// function pessoaAgora(essaPessoa) {
// console.log(`${essaPessoa.nome = 'TEONOGUEIRA'} ${essaPessoa.cidade = 'NEW ZELAND'}`
  
//     )

// }

// pessoaAgora(`${pessoa} funçao`)

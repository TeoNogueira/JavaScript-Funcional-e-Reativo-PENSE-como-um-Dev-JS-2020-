const pessoa = {

    nome: 'Teo', cidade: 'Recife'
}


//Atribuição por referencia
//-----x----x------x-----x---


pessoa.nome = 'TEONOGUEIRA'
pessoa.cidade = 'NEW ZELAND'

console.log(pessoa)
// REPARE QUE DEPOIS DA MUTABILIDADE LOGO APÓS A CONSOLE SER INVOCADA O MUTÁVEL FICOU FRIZADO E NAO CONSEGUIU ALTERAR PARA Test
const novaPessoa = Object.freeze(pessoa)



function addNewName() {

const att = {...pessoa}
att.nome = 'O cara'
return att
    
}

console.log(addNewName())


function addActive() {

    const desecPessoa = {...pessoa} /// clone

    desecPessoa.nome = 'Teo'
    desecPessoa.cidade = 'Alagoas'

return desecPessoa

}

console.log(addActive())







//-----x----x------x-----x---





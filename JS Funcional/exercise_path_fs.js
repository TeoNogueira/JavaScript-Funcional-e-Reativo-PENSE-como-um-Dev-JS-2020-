const path = require('path')
const fs = require('fs')


const caminho = path.join(__dirname, 'dados.txt')

function liberar(_, conteudo) {


if(conteudo.toString().length > 20)  {


    return console.log(conteudo.toString())

} else { return console.log('false')}


}


  fs.readFile(caminho, {}, liberar)


  

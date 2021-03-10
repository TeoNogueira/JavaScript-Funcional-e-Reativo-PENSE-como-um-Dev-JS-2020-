// proxima aula

const fs  = require('fs')

const path = require('path')



function liberar(caminho) {


   return new Promise(resolve => {

    fs.readFile(caminho, function(_, conteudo) {

         resolve(conteudo.toString())
    })

    //console.log('Depois de ler')

   })


}

const caminho = path.join(__dirname, 'dados.txt')

liberar(caminho)
.then(conteudo => console.log(conteudo))





// ABRINDO O ARQUIVO DADOS.TXT EM LINHA ATRAVES DE ARROW FUNCTION E ARRAY
//.then(conteudo => conteudo.split('\n'))
//.then(linha => console.log(linha[5]))
//Quantos elementos tenho (length)
//.then(linha => console.log(linha.length))
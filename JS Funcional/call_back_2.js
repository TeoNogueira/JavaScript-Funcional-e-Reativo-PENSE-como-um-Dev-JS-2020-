/*
const fs = require('fs')
const path = require('path')



const caminho = path.join(__dirname, 'dados.txt') // dirname me dá o diretorio que eu estou executando neste momento



function exibir_conteudo(err, conteudo ) { // lembrando que conteudo está pegando o segundo parametro do join()

    console.log(conteudo.toString())


}

console.log('inicio...')

fs.readFile(caminho, {}, exibir_conteudo)
fs.readFile(caminho, (_, conteudo) => console.log(conteudo.toString())) //SINTAXE ENXUTA //ARROW FUNCTION

console.log('fim...')

// MANEIRA SINCRONA
console.log('inicio...')
const conteudo = fs.readFileSync(caminho) // importante lembrar esse conceito de readFileSync que é executado
// após o código anterior
console.log(conteudo.toString())
console.log('Fim....') */

/*


const fs = require('fs')

const path = require('path')

const caminho = path.join(__dirname, 'blog.txt')



function liberar(_, conteudo) {

 console.log(conteudo.toString())

}


fs.readFile(caminho, {}, liberar)*/


/*


const fs = require('fs')
const path = require('path')


const caminho = path.join(__dirname, 'blog.txt')
const beleza = path.join(__dirname, 'dados.txt')


function liberar(err, conteudo) {

console.log(conteudo.toString())

}

// fs.readFile(caminho, {}, liberar)

fs.readFile(beleza, {}, liberar)


fs.readFile(caminho, {}, (_, conteudo) => console.log(conteudo.toString()))


// 

console.log('inicio...')
const conteudo = fs.readFileSync(caminho) // importante lembrar esse conceito de readFileSync que é executado
// após o código anterior
console.log(conteudo.toString())
console.log('Fim....') */


const fs = require('fs')
const path = require('path')

const walk = path.join(__dirname, 'dados.txt')
const caminho = path.join(__dirname, 'blog.txt')

function liberar(_, conteudo) {

console.log(conteudo.toString())


}


fs.readFile(walk, {}, liberar) // LER O ARQUIVO (DIFERENTE DE MOSTRAR COMO A console.log()


fs.readFile(caminho, {}, (_, conteudo) => console.log(conteudo.toString()))






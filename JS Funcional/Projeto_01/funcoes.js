const fs = require('fs');
const path = require('path')

function LerDiretorio(caminho) {
        return new Promise((resolve, reject) => {
    
     try {
let arquivos = fs.readdirSync(caminho)
//return arquivos.map(arquivo => path.join(caminho, arquivo))
    resolve(arquivos)


} 
catch(e) {

    reject(e)
        }   

    })

}

function lerArquivo(caminho) {

    return new Promise((resolve, reject) => {
try {
        const conteudo = fs.readFileSync(caminho, { encoding: 'utf-8' }) 
       resolve(conteudo.toString())
    }
    
    catch(e) { 

            reject(e)
      
         }
    })
}


function lerArquivos(caminhos) {

    return Promise.all(caminhos.map(caminho => lerArquivo(caminho)))
}



function elementosTerminadosCom(array, padraoTextual) {

            return array.filter(el => el.endsWith(padraoTextual))

}

function removerSeVazio(array) {

    return array.filter(el => el.trim())// trim tira os espaços em branco
}

function removerSeIncluir(array, padraoTextual) {

    return array.filter(el => !el.includes(padraoTextual))
}

function removerSeApenasNumero(array) {

    return array.filter(el => {
        const num = parseInt(el, trim())
       return num !== num

    })
}

function removerSimbolos(simbolos) {

    return function(array) {
        return array.map(el => {
            let novoTexto = el
            simbolos.forEach(simbolo => {

                novoTexto = novoTexto.split(simbolo).join('')
            })
        })

    }
}


module.exports = {

    LerDiretorio,
    lerArquivo,
    lerArquivos,  
    elementosTerminadosCom,
    removerSeVazio,
    removerSeIncluir,
    removerSimbolos,
    removerSeApenasNumero
} 




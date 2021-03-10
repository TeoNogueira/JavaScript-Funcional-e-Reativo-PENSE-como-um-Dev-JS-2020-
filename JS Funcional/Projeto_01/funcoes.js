const fs = require('fs');
const path = require('path')

function LerDiretorio(caminho) {

let arquivos = fs.readdirSync(caminho)

return arquivos.map(arquivo => path.join(caminho, arquivo))

//console.log(Array.isArray(arquivos))
//console.log(arquivos)

}



module.exports = {

    LerDiretorio
}


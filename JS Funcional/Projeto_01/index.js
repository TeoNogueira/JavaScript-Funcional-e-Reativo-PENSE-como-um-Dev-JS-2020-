
const path = require('path')
const fn = require('./funcoes')


 const caminho = path.join(__dirname, '..', 'legendas')



const arquivos = fn.LerDiretorio(caminho)


console.log(arquivos)





 
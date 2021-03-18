const path = require('path')
const fn = require('./funcoes')


 const caminho = path.join(__dirname, '..', 'legendas')

 const simbolos = [

    '.', '?', '-', '"', '♪',
     '_', '<i>', '</i>', '\r', '[', ']', '(', ')'
 ]



fn.LerDiretorio(caminho)
.then(arquivos => fn.elementosTerminadosCom(arquivos, '.srt'))
.then(arquivosSRT => fn.lerArquivos(arquivosSRT))
.then(conteudos => conteudos.join('\n'))
.then(todoConteudo => todoConteudo.split('\n'))// split para quebrar linha
.then(linhas => fn.removerSeVazio(linhas))
.then(linhas => fn.removerSeIncluir(linhas, '-->'))// se eu quiser remover os parametros linhas o codigo continuará a funcionar normalmente
.then(linhas => fn.removerSeApenasNumero(linhas))
.then(fn.removerSimbolos(simbolos))
.then(console.log)





 
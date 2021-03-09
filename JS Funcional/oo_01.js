//função construtora (Objetivo: construir objetos)

function Produto(nome, preco, desc = 0.15) {

this.nome = nome
this.preco = preco
this.desc = desc
let privado = 3

this.precoFinal = function () {

    return this.preco * (1 - this.desc )
}

}



const p1 = new Produto('Caneta', 8.59) 
console.log(p1.nome)
const p2 = new Produto('Caneta', 2345.98)
console.log(p2.preco)
console.log(p2.privado)
console.log(p2.precoFinal())

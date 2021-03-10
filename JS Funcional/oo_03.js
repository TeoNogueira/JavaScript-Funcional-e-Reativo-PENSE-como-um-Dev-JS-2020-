//função construtora (Objetivo: construir objetos)

function Produto(nome, preco, desc = 0.15) {

    this.nome = nome
    this.preco = preco
    this._desc = desc
    let privado = 3
    
    this.precoFinal = function () {
    
        return this.preco * (1 - this._desc )
    }
    
    }
    
    Produto.prototype.log = function() {

        console.log(`Nome: ${this.nome} Preço: R$ ${this.preco}`)
    }
    
    //

  Object.defineProperty(Produto.prototype, 'desc', {

get: function() {

    return this._desc

}

})
///--------------------------------------------------------

Object.defineProperty(Produto.prototype, 'descString', {

    get: function() {
    
        return `${this._desc * 100}%`
    
    }
    
    })

//Mostrando o prototype Criado Chamando no contexto da funçao


    const p1 = new Produto('Caneta', 8.59) 
    p1.log()//contexto prototype
    console.log(p1.nome)
  

    const p2 = new Produto('Caneta', 2345.98)
    console.log(p2.preco)
    console.log(p2.precoFinal())
    console.log(p2.desc)
    console.log(p2.descString)
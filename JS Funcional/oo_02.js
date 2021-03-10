class Produto{

    constructor(nome, preco, desc) {

        this.nome = nome
        this.preco = preco
        this.desc = desc
        
    }

get nome() {


    return `Produto: ${this._nome}`
}


set nome(novoNome) {
this._nome = novoNome.toUpperCase()
    
}

set preco(novoPreco) {


    if(novoPreco >= 0) {


        this._preco = novoPreco
    }
}

get preco() {
    return `Valor: ${this._preco}`
}

    get precoFinal() {

        return this.preco * (1 - this.desc)
     }


}


const p1 = new Produto('caneta', 10,) 
p1.nome = 'caneta'
p1.preco = -20
console.log(p1.nome)
console.log(p1.preco)


const p2 = new Produto('geladeira', 10000, 0.8)

console.log(p2.preco)
console.log(p2.precoFinal)
console.log(typeof Produto)
//usar método set para inserir numa variável(contexto this refente nessa aula!)
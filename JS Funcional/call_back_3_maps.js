/*const nums = [1, 2, 3, 4]

const dobro = (n, i, a) => n * 2 + i + a.length // i = indice a ordem 0 1 2 3


console.log(nums.map(dobro)) */


/*
const nomes = ['Ana', 'Bia', 'Gui', 'Lia', 'Rafa']


const primeiraLetra = texto => texto[0]


console.log(nomes.map(primeiraLetra))

console.log(nomes)
*/

/*
const clansTop10 = ['Greenwind', 'ForsakenCity', 'Regenshein', 'SoulsN', 'SlicePad', 'DkhasAname']


const buscarPesLetra = texto1e2 => texto1e2[0]



console.log(clansTop10.map(buscarPesLetra))

*/

/*

const listaCoisas = [
 
{  
    camisa: 'Nike', cor: 'preto', qtde: 50, preco: 900.00
}, 

{
    bermuda: 'Billabong', cor: 'azul, preto, amarela', qtde: 1500, preco: 450.00
} , 

{ 
    relogio: 'Pumma', cor: 'preto', qtde: 100, preco: 250.00
},
 
{
     bone: 'Razer', cor: 'preto, cinza, verde, azul, magenta', qtde: 200, preco: 100
 },
  { 
     headphone: 'Dazz', cor: 'preto, branco, cinza', qtde: 200, preco: 400
 }

]


const getCamisa = traga => traga.camisa

console.log(listaCoisas.map(getCamisa))



const getTotal = traga => traga.qtde * traga.preco

const totais = listaCoisas.map(getTotal)


console.log(totais)

// --- -- ----
*/


const objEmArrays = [{
casaTamanho: 'Grande', cor: 'Verde', quartos: 10, banheiros: 5, piscina: true

}, {casaTamanho: 'Pequeno', cor: 'Cinza', quartos: 3, banheiros: 1
}, {casaTamanho: 'Médio', cor: 'Branco', quartos: 6, banheiros: 3}, {

    casaTamanho: 'Mansão', cor: 'Cinza', quartos: 15, banheiros: 8, piscina: true
}

]

/*
const pega = item => item.quartos +  item.banheiros

const totais = pega

console.log(objEmArrays.map(totais))


*/

Array.prototype.meuMap = function(fn) {
   const novoArray = []
    

      for( let i = 0; i < this.length; i ++) {

    
        const resultado = fn(this[i], i, this)
        novoArray.push(` Resultado: ${resultado}`)
  

      
      //--x----
      //for(let el of this) {

       // fn(el)
      }
      return novoArray
   }


 const pega = item => item.quartos +  item.banheiros

const totais = pega

console.log(objEmArrays.meuMap(totais))

const trazer = [{nome: 'Teo', idade: 30, clan: 'Melfis', perso: 'NightElf'},
 {nome: 'Ferreira', idade: 20, clan: 'GGTV', perso: 'Human'},
  {nome: 'Agatha', idade: 28, clan: 'Melfis', perso: 'Orc'}
]

const mostrar = item => (item.clan)

console.log(trazer.map(mostrar))


//--x---x---x--x---x--x---x---x--x--x--x--


const show = item => item.nome
console.log(trazer.map(show))


// ---x-- ---x- ----x-- ----x-----x-----x----x----x----



const arrayObj = [{corredor: 109, quarto: 309, banheiro: 3}, {corredor: 200, quarto: 500, banheiro: 2}]


const recebe  = item => item.banheiro


console.log(arrayObj.map(recebe))

//--x-----x-----x---------x----x--xxxx


function recebo(fn, a, b) {

return fn(a, b)

}


const beleza = (y, t) => console.log(y * t)

recebo(beleza, (5), (9))



// --x-- ----x---x---x--x--x----



const obj = [{linear: 'verde', callBack: true}]


const vaivir = item => item.callBack

console.log(obj.map(vaivir))





const obob = [{cor: 'Preto', carro: 'Acura_RSX', Marca: 'Mazda' }, 
{cor: 'Azul', carro: 'Acura_RSX', Marca: 'Mazda'},
 {cor: 'Vermelho', carro: 'Acura_RSX', Marca: 'Mazda'}]


 const vari = item => item.cor

 console.log(obob.map(vari))

//1

 const refeicao = [{comida: 'Arroz', bebida: 'Suco de Limão'},
  {comida: 'Bolacha', bebida: 'Agua'},
   {comida: 'Pao', bebida: 'Coca-Cola'}]

//2
   const ref2 = item => item.bebida


   //3 invocação com map puxando o array+objetos e depois a arrow-function
   console.log(refeicao.map(ref2))


// ---- --- --- ----- ----- --------- -------- --------





function aew(fn, a, b) {


  return fn(a, b)
  

}

const bbbleza = (x, y) => console.log(x * y)


aew(bbbleza, (50), (10))


//------x---x--x--x-----x--x--x-x-x-x-x--x------------x----


function batera(fn, chave, caixa14, pedal) {

  return fn(chave, caixa14, pedal)

}


const pecas = (a, b, c) => console.log(a + b + c)

batera(pecas, 50.00, 2500.00, 1200.00)

//-----x---------x----------x---------x-------x----









const trazer = [{nome: 'Teo', idade: 30, clan: 'Melfis', perso: 'NightElf'},
 {nome: 'Ferreira', idade: 20, clan: 'Melfis', perso: 'Human'},
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


// ---- --- --- ----- ----- --------- -------- --------















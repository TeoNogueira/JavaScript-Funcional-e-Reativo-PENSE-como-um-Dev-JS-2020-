const estrutura = [{


    t: 1,

    bele: 2222,
}]

const criarParam = item => item.bele

const mapear = estrutura.map(criarParam)

console.log(mapear)

function ifss() {
if(mapear > 2000) {

    console.log('Aprovado')
} else {

    console.log('Reprovado')
}

}

ifss()


if(mapear > 2000 ) {

    console.log('Receba o prêmio')
} else { console.log('Não receberá o prêmio')}

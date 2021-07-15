//Uma função pura é determinada é uma função em que o valor
// do retorno é determinado APENAS por seus valores de entrada
// sem efeitos colateráis observáveis.

// FUNÇÃO IMPURA DEVIDO AO PI ESTÁ FORA DELA
const PI = 3.14

function AreaCircle(raio) {


    if( raio === 15 || PI === 3.14) {

        console.log('FUNÇÃO IMPURA ABAIXO:')
    }

return raio * raio * PI

}

console.log(AreaCircle(100))
// --- -X---- ----X- ---- --- X--- --X-- ----


// FUNÇÃO PURA 

function areaCirclePura(raio, pi) {
 
return raio * raio * pi

}


console.log(areaCirclePura(15, 3.16)) // area do circulo * 



function x(fn3, fn2, fn1, fn4) {


    return function y(ParametroDentroDasFuncoes) {


        return fn4(fn3(fn2(fn1(ParametroDentroDasFuncoes))))
    }
}


function a(ParametroDentroDasFuncoes) {


    return ParametroDentroDasFuncoes.split('').join(' ')
    

}


    const recebe = (ParametroDentroDasFuncoes) => {

        return ParametroDentroDasFuncoes.toUpperCase('')
  
      }
  

function c(ParametroDentroDasFuncoes) {


return ParametroDentroDasFuncoes.toUpperCase('')

}


function d(ParametroDentroDasFuncoes) {


    return ParametroDentroDasFuncoes.toUpperCase('')
}


const pegar = x(a, recebe, c, d)


console.log(pegar('Não Precisava de texto'))
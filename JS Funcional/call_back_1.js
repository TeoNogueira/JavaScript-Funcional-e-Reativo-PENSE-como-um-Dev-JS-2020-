/*
function exec(fn, a, b) {
 
    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)

const subNoTerminal = (x, y) => console.log( x - y)

const subtrair = (x, y) => (x - y)

exec(somarNoTerminal, 567, 30)
exec(subNoTerminal, 182, 50)

const r = exec(subtrair, 50, 25)

console.log(r)

// ....
const cb = () => {

    console.log('Exec...')
}
setInterval(cb, 4000)

//-----------x---x--x--x--x--x-x--x-x-x-x--x-----


setInterval(() => console.log('Excell nao presta... repito...'), 5000)




function fff(nomeSobrenome, a, b) {

return nomeSobrenome(a, b)

}


const conca = (a, b) => console.log(a + b)


fff(conca, "Teófilo ", "Nogueira")*/



function exec(fn, a, b) {


    return fn(a, b)
}

const somarNoTerminal = (x, y) => console.log(x + y)

const subTerminal = (x, y) => console.log(x - y)
exec(somarNoTerminal, 56, 38)

exec(subTerminal, 190, 50)


function blog(a, b) {

    
    return a - b


}

console.log(blog(50, 20))

// pra setInterval vem primeiro uma funçao depois a quantidade de tempo(seconds, etcs...m)
const fn = () => console.log('Exec....')
setInterval(fn, 1000)

//setTimeout(fn, 1000)



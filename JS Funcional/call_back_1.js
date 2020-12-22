
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


fff(conca, "Teófilo ", "Nogueira")
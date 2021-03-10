let artista = 'The Beatles'

let bar = {
    artista: 'Dire Straits'
}

let show = {
    artista: 'Blind Guardian'
}

function tocar () { 
    console.log(`Estamos tocando ${this.artista}!`)
}



const toque = tocar.bind(bar)
const tocou = tocar.bind(show)


tocou()
toque()
console.log(artista)



function allow() {

console.log(`Estamos ouvindo ${this.artista}`)
}

const vem = allow.bind(bar)


vem()



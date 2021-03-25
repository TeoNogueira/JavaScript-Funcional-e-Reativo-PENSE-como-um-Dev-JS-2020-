function myFunc() {

    console.log(this)
}

myFunc()
const belo = {

Nome: 'Evellyn',
Sobrenome: 'Belo',
Idade: 20,
Hobbie: 'Tocar Violino',

destructuring() {

    const {Nome, Sobrenome, Hobbie} = this

    return `${Nome} ${Sobrenome} que gosta de ${Hobbie}`

},

invoker () {

const fullName = this.destructuring()

console.log(`${fullName} é um personagem da minha história`)

    }

        }


belo.invoker()


const invocar = belo.invoker


invoker()
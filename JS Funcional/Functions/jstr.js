let meAsk = [{

    nome: 'Diego', idade: 40
}]


let meAsk2 = [{

    nome: 'Dani', idade: 30
}]


const showMe1 = `Trabalha na rocketSeat`
const showMe2 = `Trabalham na rocketSeat`

const map = meAsk.map(item => `- ${item.nome}\n `) + meAsk2.map(item => `- ${item.nome} `)



const result = map 


let listHackaton = [

  {  noe: result}
    
    
    
    ] 



const [{noe}] = listHackaton


console.log(noe)

let ask = [

    {pergunta: 'Devo estudar javascript antes de react', resposta: true},
    {pergunta: 'parseInt() é importante?', resposta: true},
    {pergunta: 'console.log depois do return funciona?', resposta: false},
    {pergunta: 'Devo estudar React?', resposta: true},

]




const idAsks = ask.reduce((acc, {pergunta}) => `${acc} - ${pergunta}\n`,'')

const perguntas = `as Perguntas são: \n ${idAsks}` 

console.log(perguntas);



const idReq = ask.reduce((acc, { resposta }) => {


acc[resposta] = acc[resposta] + 1 || 1


return acc

}, {})

console.log(idReq)
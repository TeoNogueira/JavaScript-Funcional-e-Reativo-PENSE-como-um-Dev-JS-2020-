// CODANDO PARTE 2 AGORA IREMOS INSERIR A li DENTRO DA ul VAZIA DO INDEX.HTML 

// 4 - -->>> obtenha a referencia através do id da ul  lembre-se de testar usando console.log(transactionsUl)
const transactionsUl = document.querySelector('#transactions')


//PAREI NO VÍDEO 13:58 MINUTOS

const dummyTransactions = [
   
   
    {id: 1, name: 'Bolo de Brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de Frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}  

]


const addTransactionsIntoDOM = transaction =>  {
  
    const operator = transaction.amount < 0 ? '-' : '+'
   
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
 
    const amountWithoutOperator = Math.abs(transaction.amount)
 
 
    const li = document.createElement('li')
    
  
    li.classList.add(CSSClass) 
 
 
    li.innerHTML = `${transaction.name}
     <span>
     ${operator} R$ ${amountWithoutOperator}
     </span>
     <button class="delete-btn">x</button>` 
 
 
 }


 addTransactionsIntoDOM(dummyTransactions[0])
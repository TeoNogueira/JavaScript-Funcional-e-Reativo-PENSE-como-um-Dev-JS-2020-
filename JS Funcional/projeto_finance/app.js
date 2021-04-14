// Concluso 

// adicionar uma classe ou id document.querySelector()

const transactionsUl = document.querySelector('#transactions') 

const incomeDisplay = document.querySelector('#money-plus')
const expenseDisplay = document.querySelector('#money-minus')
const balanceDisplay = document.querySelector('#balance')

//formulário

const form = document.querySelector('#form')
const inputTransactionName = document.querySelector('#text')
const inputTransactionAmount = document.querySelector('#amount')

//

const localStorageTransactions = 

JSON.parse(localStorage.getItem('transactions'))

let transactions = localStorage
.getItem('transactions')
 !== null ? localStorageTransactions : []

const removeTransaction = ID => {

transactions = transactions.filter(transaction => transaction.id !== ID)

updateLocalStorage()
    init()
}

const addTransactionsIntoDom = transaction => {

    const operator = transaction.amount < 0 ? '-' : '+'
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'
    const li = document.createElement('li')

// pra trazer numeros absolutos sem operadores negativos ou positivos
    const amountWithoutOperator = Math.abs(transaction.amount) 

    //Método add() para adicionar uma classe
    li.classList.add(CSSClass)
    li.innerHTML = `

    ${transaction.name}
     <span>${operator} R$ ${amountWithoutOperator}</span>
    <button class="delete-btn" onClick="removeTransaction(${transaction.id})">
      x
    </button>
    `
       // prepend() para inserir uma li dentro e no começo de uma ul
       // append() para inserir uma li dentro e no Final de uma ul
       // se fosse inserido um innerHTML encadeado em transactionsUl, seria 
       // exibido dentro da DOM como um objectINNERHTML e não uma li

    transactionsUl.append(li)
}


const updateBalanceValues = () => {

    const transactionsAmounts = transactions
    .map(transaction => transaction.amount) 
    const total = transactionsAmounts
    .reduce((accumulator, transaction) => accumulator + transaction, 0)
    .toFixed(2) // toFixed() para inserir decimais 

    const income = transactionsAmounts
    .filter(value => value > 0)
    .reduce((accumulator, value) => accumulator + value, 0) 
    .toFixed(2)
    const expense = Math.abs(transactionsAmounts
    .filter(value => value < 0 )
    .reduce((accumulator, value) => accumulator + value, 0))
    .toFixed(2)

    //Lógica >>>>> Ex: Pego a classe digo para retornar todo conteúdo de texto atribuido na const total
    //textContent me retorna todo conteúdo de texto

    balanceDisplay.textContent = `R$  ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
    
}

// 

const init = () => {
transactionsUl.innerHTML = ''
transactions.forEach(addTransactionsIntoDom)
updateBalanceValues()

}

init()

// Método para salvar uma informação no localStorage
const updateLocalStorage = () => {
                                    //JSON.stringify para converter array de objetos em string
    localStorage.setItem('transactions', JSON.stringify(transactions))
}



const generateID = () => {

    return Math.round(Math.random() * 1000)
}


// submit tipo de evento que será escutado

form.addEventListener('submit', event => {
    // este evento impede que o form seja enviado e a página seja recarregada: preventDefault()
event.preventDefault()


const transactionName = inputTransactionName.value.trim()
const transactionAmount = inputTransactionAmount.value.trim()


if(transactionName === '' || transactionAmount === '' ) {

alert('Por favor Preencha tanto o nome quanto o valor da transação')
return
}


const transaction  =  { id: generateID(),
     name: transactionName,
      amount: Number(transactionAmount)//convertendo de string para Number 
     }

transactions.push(transaction)
init()
updateLocalStorage()


inputTransactionName.value = ''
inputTransactionAmount.value = ''

    })


    

    
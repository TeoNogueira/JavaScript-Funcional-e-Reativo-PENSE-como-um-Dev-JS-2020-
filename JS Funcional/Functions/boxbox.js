let booksBox = {

booksIn: 0,

spaces: 5,


}


booksBox.addBooks = (quantityBooks) => {

    const { booksIn, spaces} = booksBox

    booksBox.booksIn += quantityBooks;

if( booksIn > spaces) {

    return 'Espaço ultrapassando'
}
   

return booksBox.booksIn

}


console.log(booksBox.addBooks(4))




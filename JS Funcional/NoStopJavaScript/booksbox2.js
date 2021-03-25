let booksBox = {

spaces: 5,
booksIn: 0

}


booksBox.addBooks = (booksQuantity) => {

   booksBox.booksIn += booksQuantity

if(booksBox.booksIn - booksBox.spaces) {
   
const singularOrPluralHa = booksBox.booksIn === 1 ? 'Existe' : 'Há'
const singularOrPluralBooks = booksBox.booksIn === 1 ? 'Livro' : 'Livros'
return  `Já ${singularOrPluralHa} ${booksBox.booksIn} ${singularOrPluralBooks}`

}

}


console.log(booksBox.addBooks(1))


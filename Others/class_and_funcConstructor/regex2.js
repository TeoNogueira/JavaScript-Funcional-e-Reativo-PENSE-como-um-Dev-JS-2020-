// Por exemplo, re = /\w+\s/g cria uma expressão regular que procura um ou mais caracteres seguidos por um espaço e procura essa combinação em toda a cadeia.

//O método match() retorna uma correspondência entre uma string com uma expressão regular.


    // const re = /\w+\s/g;
    // const list = "fee fi fo fum ";
    // const myArray = list.match(re);
    // console.log(myArray);







var str = "Para maiores informações, veja o Capítulo 3.4.5.1";
var re = /(capítulo \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

// retorna ["Capítulo 3.4.5.1",
           // "Capítulo 3.4.5.1",
           // ".1",
          //  index: 33,
          //  input: "Para maiores informações, veja o Capítulo 3.4.5.1"]

// "Capítulo 3.4.5.1" é a primeira correspondência e o primeiro valor
//  capturado a partir de (capítulo \d+(\.\d)*).
// ".1" é o útlimo valor de (\.\d).
// A propriedade "index" (33) é o índice de base zero da correspôndencia inteira.
// A propriedade "input" é a string original que foi analisada.
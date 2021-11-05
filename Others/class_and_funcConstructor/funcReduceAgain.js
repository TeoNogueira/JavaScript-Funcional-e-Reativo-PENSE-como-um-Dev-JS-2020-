let frutas = ['maça', 'laranja', 'uva']


let verduras = ['quiabo', 'coentro', 'tomate'];




const logical = frutas => frutas.reduce((acc, item) => `${acc} - ${item}\n`, ' Lista:\n');


const result = logical


console.log(logical(frutas));


console.log(logical(verduras));
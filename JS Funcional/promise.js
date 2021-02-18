let p = new Promise(function(cumprirPromessa) {

cumprirPromessa({x:3, y:4})  // 
})

console.log(typeof p)

// quando a promessa for cumprida ele passará o valor 3 e 4 ou 3 ou 4 dependendo da chamada na console de acordo com os objetos

p.then(function(valor) {

console.log(valor.x)


})
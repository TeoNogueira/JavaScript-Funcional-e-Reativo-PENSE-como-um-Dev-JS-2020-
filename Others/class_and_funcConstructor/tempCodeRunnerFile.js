
var str = "Para maiores informações, veja o Capítulo 3.4.5.1";
var re = /(capítulo \d+(\.\d)*)/i;
var found = str.match(re);

console.log(found);

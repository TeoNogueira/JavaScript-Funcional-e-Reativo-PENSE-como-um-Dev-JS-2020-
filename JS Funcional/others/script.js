// function trocaClasse(elemento, antiga, nova) {
//     elemento.classList.remove(antiga);
//     elemento.classList.add(nova);
// }


// setTimeout(function() {
//     var div = document.querySelector('div');
//     trocaClasse(div, 'vermelho', 'active');
// }, 2000);
//treinando

function trocandoClasses() {
function changeClass(element, old, actualClass) {

element.classList.remove(old);
element.classList.add(actualClass);

}

setTimeout(function() {

let div = document.querySelector('div');

changeClass(div, 'vermelho', 'active')


}, 2000);

}

trocandoClasses()
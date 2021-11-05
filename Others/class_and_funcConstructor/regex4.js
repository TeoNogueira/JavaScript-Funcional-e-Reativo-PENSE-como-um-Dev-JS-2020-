Isso exibe ["fee ", "fi ", "fo "]. Neste exemplo, você pode substituir a linha

var re = /\w+\s/g;

por:

var re = new RegExp("\\w+\\s", "g");

e obtenha o mesmo resultado.

O sinalizador m é usado para especificar que uma sequência de entrada de múltiplas linhas deve ser tratada como várias linhas. Se o sinalizador m for usado, ^ e $ combinam no início ou no final de qualquer linha na sequência de entrada, em vez do início ou no final de toda a sequência.
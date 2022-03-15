// Escreva um programa em Javascript e crie uma variável chamada "nomeDoCarro" e atribua-a um valor "Fusca".
//let nomeDoCarro = "fusca"

//Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

//let nome = prompt('qual o seu nome: ');
//document.write("ola " + nome );

//3
//Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a 
//idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

//let nome = prompt('qual é o seu nome: ');
//let idade = prompt('qual a sua idade '+ nome);
//document.write("Olá, " + nome + " ,sua idade é " + idade);

//4
//Considerando a figura acima, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas 
//respectivas áreas. O usuário irá informar os valores de cada variável. Crie um arquivo para cada fórmula e poste
//os  arquivos no GitHub. Link do repositório abaixo. 

const base = prompt('informe a base: ')
const altura = prompt('informe a altura: ')
const resulretangulo = base * altura

document.write('O calculo da area do retângulo: ' + resulretangulo)

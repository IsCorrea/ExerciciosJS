//Exercício #1: Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
console.log("Hello World!")

//Exercício #2: Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
//let firstNumber = Number(window.prompt("First number"))
//let secondNumber = Number(window.prompt("Second number"))
//let soma = firstNumber + secondNumber
//console.log(`A soma é ${soma}`)

//Exercício #3: Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
var variableOne = 3
const isNumber = typeof variableOne === "number" ? "É um número" : "Não é um número"
console.log(isNumber)

//Exercício #4: Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
var variableTwo = 3
const isString = typeof variableTwo === "string" ? "É uma String" : "Não é uma String"
console.log(isString)

//Exercício #5: Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
var variableThree = true
const isBoolean = typeof variableThree === "boolean" ? "É um booleano" : "Não é um booleano"
console.log(isBoolean)

//Exercício #6: Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
//var firstNumber = window.prompt("Primeiro número")
//var secondNumber = window.prompt("Segundo número")
//var subtraction = Number(firstNumber) - Number(secondNumber)
//console.log(`A diferença é ${subtraction}`)

//Exercícios #7 e #8: Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
//var firstNumber = window.prompt("Primeiro número")
//var secondNumber = window.prompt("Segundo número")
//var multiply = Number(firstNumber) * Number(secondNumber)
//var divide = Number(firstNumber) / Number(secondNumber)
//console.log(`A multiplicação é ${multiply}. A divisão é ${divide}`)

//Exercício #9: Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
//var variableFour = Number(window.prompt("Digite um número"))
//var verification = Number.isInteger((variableFour)/2)
//const isEven = verification === true ? "É um número par" : "Não é um número par"
//console.log(isEven)

//Exercício #10: Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
var variableFive = Number(window.prompt("Digite um número"))
var verification = Number.isInteger((variableFive)/2)
const isEven = verification === false ? "É um número ímpar" : "Não é um número ímpar"
console.log(isEven)

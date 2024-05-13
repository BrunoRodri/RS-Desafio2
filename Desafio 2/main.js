// 1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador.
alert('Hello World!')

// 2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas.
let number1 = 10
let number2 = 5
let sum = number1 + number2
console.log(sum)

// 3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".
{
  let idade = 23;
  if(typeof idade === "number") {
    console.log('É um número')
  } else {
    console.log('Não é um número')
  }
}

// 4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string".
{
  let name = 'Bruno';
  if(typeof name === "string") {
    console.log('É uma String')
  } else {
    console.log('Não é uma string')
  }
}

// 5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano".
{
  let condition = true;
  if(typeof condition === "boolean") {
    console.log('É um booleano')
  } else {
    console.log('Não é um booleano')
  }
}

// 6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas.
const sub = number1 - number2
console.log(sub)

// 7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas.
const multi = number1 * number2
console.log(multi)

// 8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas.
const div = number1 / number2
console.log(div)

// 9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par".
{
  const number = 4
  if((number % 2) === 0){
    console.log('É um número par')
  }else{
    console.log('Não é um número par')
  }
}

// 10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar".
{
  const number = 5
  if((number % 2) !== 0){
    console.log('É um número impar')
  }else{
    console.log('Não é um número impar')
  }
}
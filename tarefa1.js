
const prompt = require('prompt-sync')();

// EXERCÍCIO 1:
console.log("Exercício 1");

let celsius = parseInt(prompt("Digite uma temperatura em Celsius: "));    
let fahrenheit;

fahrenheit = celsius * 1.8 + 32;
console.log(celsius, "graus Celsius equivalem a", fahrenheit, "graus Fahrenheit.");
console.log("");


// EXERCÍCIO 2: 
console.log("Exercício 2");

let eleitores = parseInt(prompt("Digite a quantidade de eleitores: "));  
let votoBranco = parseInt(prompt("Digite a quantidade de votos brancos: "));  
let votoNulo = parseInt(prompt("Digite a quantidade de votos nulos: "));  
let votoValido = parseInt(prompt("Digite a quantidade de votos válidos: "));  

let percentualVotoBranco = votoBranco / eleitores * 100;
let percentualVotoNulo = votoNulo / eleitores * 100;
let percentualVotoValido = votoValido / eleitores * 100;

console.log(percentualVotoBranco, "(percentual de votos brancos)");
console.log(percentualVotoNulo, "(percentual de votos nulos)");
console.log(percentualVotoValido, "(percentual de votos válidos)");
console.log("");



// EXERCICIO 3:
console.log("Exercício 3");

let num1 = parseInt(prompt("Digite um número: "));  
let num2 = parseInt(prompt("Digite um número: ")); 
let num3 = parseInt(prompt("Digite um número: "));  
let num4 = parseInt(prompt("Digite um número: ")); 

let int1 = 25 + num1;
let int2 = 3 * num2;
let int3 = 12 * num3 / 100;
let int4 = num1 + num2 + num3;

console.log(int1);
console.log(int2);
console.log(int3);
console.log(int4);
console.log("");



// EXERCICIO 4 e 5:
console.log("Exercício 4 e 5");

let score1 = parseFloat(prompt("Nota da avaliação 1: "));  
let score2 = parseFloat(prompt("Nota da avaliação 2: ")); 

let average1 = (score1 + score2) / 2;
console.log(average1);

if (average1 >= 6) {
    console.log("PARABÉNS! Você foi aprovado!");
} else {
    console.log("Você foi REPROVADO! Estude mais!");
}
console.log("");



// EXERCÍCIO 6:
console.log("Exercício 6");

let side1 = parseInt(prompt("Lado 1: "));  
let side2 = parseInt(prompt("Lado 2: "));   
let side3 = parseInt(prompt("Lado 3: "));  

if (side1 < side2 + side3 && side2 < side1 + side3 && side3 < side1 + side3) {
    if (side1 === side2 && side2 === side3) { 
        console.log("É um triângulo equilátero.");
    } else if (side1 === side2 && side1 !== side3 || 
                side1 === side3 && side1 !== side2 ||
                side2 === side3 && side1 !== side2) {
        console.log("É um triângulo isósceles.");
    } else if (side1 !== side2 && side1 !== side3 && side2 !== side3) {
        console.log("É um triângulo escaleno.");
    }
} else {
    console.log("Não é um triângulo.");
}
console.log("");



// EXERCÍCIO 7:
console.log("Exercício 7");

let apples = parseInt(prompt("Quantas maçãs você quer comprar? "));  

let price;

if (apples < 12) {
    price = apples * 30 / 100;
} else if (apples >= 12) {
    price = apples * 25 / 100;
}

console.log("Seu total deu R$", price);
console.log("");



// EXERCÍCIO 8:
console.log("Exercício 8");

let num5 = parseInt(prompt("Digite um número: "));  
let num6 = parseInt(prompt("Digite um número: "));

if (num5 === num6) {
    console.log("Digite 2 números diferentes.");
} else if (num5 > num6) {
    console.log(num6);
    console.log(num5);
} else {
    console.log(num5);
    console.log(num6);
}
console.log("");



// EXERCÍCIO 9:
console.log("Exercício 9");

let code = parseInt(prompt("Digite o código de origem: "));    

let region;

if (code === 1) {
    region = "Sul";
} else if (code === 2) {
    region = "Norte";
} else if (code === 3) {
    region = "Leste";
} else if (code === 4) {
    region = "Oeste";
} else if (code === 5 || code === 6) {
    region = "Nordeste";
} else if (code >= 7 && code <= 9) {
    region = "Sudeste";
} else if (code >= 10 && code <= 20) {
    region = "Centro-Oeste";
} else if (code >= 25 && code <= 50) {
    region = "Nordeste";
} else {
    region = "Produto importado";
}

console.log("Região do produto:", region);
console.log("");



// EXERCÍCIO 10:
console.log("Exercício 10");

let repeatNumber = parseInt(prompt("Digite um número inteiro: "));    

for (let i = 0; i < 10; i++) {
    console.log(repeatNumber);
}
console.log("");



// EXERCÍCIO 11:
console.log("Exercício 11");

let num7;

do {
    num7 = parseInt(prompt("Digite um número inteiro e direi se é par ou ímpar: "));

    if (isNaN(num7) || num7 < 0) {
        break;
    }

    if (num7 % 2 == 0) {
        console.log(num7, "é par.");
    } else {
        console.log(num7, "é ímpar.");
    }
} while (true);
console.log("");



// EXERCÍCIO 12:
console.log("Exercício 12");

let num8 = 999;

for (let i = 0; i <= 999; i++) {
    num8 = num8 + 1;

    if (num8 % 11 === 5) {
        console.log(num8);
    }
}
console.log("");



// EXERCÍCIO 13:

console.log("Exercício 13");

for (let count1 = 1; count1 <= 5; count1++) {
    let n = prompt("Qual taboada vc quer? ");
    let multiplier = 1;

    for (let i = 1; i <= n; i++) {
        console.log(`${n} * ${multiplier} =`, n * multiplier);
        multiplier++;
    }
}
console.log("");



// EXERCÍCIO 14:
console.log("Exercício 14");

let num9;
let sum = 0;
let count2 = 0;

do {
  num9 = parseFloat(prompt("Digite um número decimal ou 0 para parar e calcular a média: "));
  sum += num9;
  count2++;
} while (num9 !== 0);

let average2 = sum / (count2 - 1);
console.log("A média dos números é", average2);
console.log("");



// EXERCÍCIO 15:
console.log("Exercício 15");

let number1;
let number2;
let sum1 = 0;
let sum2 = 0;
let count3 = 0;

do {
  number1 = parseFloat(prompt("Digite um número decimal ou 0 para parar e calcular a média: "));
  if (number1 !== 0) {
    number2 = parseFloat(prompt("Qual peso vc quer atribuir para este número? "));
    sum2 += number2;
  }
  sum1 = sum1 + (number1 * number2);
  count3++;
} while (number1 !== 0);

let average = sum1 / sum2;
console.log("A média ponderada destes números é", average);
console.log("");



// EXERCÍCIO 16:
console.log("Exercício 16");

let count4 = 0;
let number3 = 101;
let i = 2;

do {
    while (number3 % i !== 0 && i <= number3 / 2) {
        i++;
    }
    if (i > number3 / 2) {
        count4++;
        console.log(number3);
    }
    i = 2;
    number3++;
} while(count4 < 50);
console.log("");

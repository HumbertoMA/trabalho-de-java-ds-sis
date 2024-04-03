// 01) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a soma desses números no console.
let num1 = 10;
let num2 = 5;
console.log(num1 + num2);

// 02) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a subtração desses números no console.
let num3 = 15;
let num4 = 7;
console.log(num3 - num4);

// 03) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o produto desses números no console.
let num5 = 8;
let num6 = 4;
console.log(num5 * num6);

// 04) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a divisão desses números no console.
let num7 = 20;
let num8 = 4;
console.log(num7 / num8);

// 05) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o quadrado desse número no console.
let num9 = 6;
console.log(num9 * num9);

// 06) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a raiz quadrada desse número no console.
let num10 = 25;
console.log(Math.sqrt(num10));

// 07) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o módulo desse número (valor absoluto) no console.
let num11 = -8;
console.log(Math.abs(num11));

// 08) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é par ou ímpar no console.
let num12 = 17;
if (num12 % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 09) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é positivo, negativo ou zero no console.
let num13 = -2;
if (num13 > 0) {
    console.log("Positivo");
} else if (num13 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 10) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o maior número no console.
let num14 = 30;
let num15 = 25;
console.log(Math.max(num14, num15));

// 11) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o menor número no console.
let num16 = 8;
let num17 = 4;
console.log(Math.min(num16, num17));

// 12) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é primo ou não no console.
let num18 = 7;
let isPrime = true;
if (num18 === 1) {
    isPrime = false;
} else {
    for (let i = 2; i <= Math.sqrt(num18); i++) {
        if (num18 % i === 0) {
            isPrime = false;
            break;
        }
    }
}
if (isPrime && num18 > 1) {
    console.log("Primo");
} else {
    console.log("Não primo");
}

// 13) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba todos os números de 1 até o número fornecido no console.
let num19 = 10;
for (let i = 1; i <= num19; i++) {
    console.log(i);
}

// 14) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a tabuada desse número no console.
let num20 = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num20 + " x " + i + " = " + num20 * i);
}

// 15) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é um quadrado perfeito no console.
let num21 = 25;
if (Math.sqrt(num21) % 1 === 0) {
    console.log("Quadrado perfeito");
} else {
    console.log("Não é quadrado perfeito");
}

// 16) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é múltiplo de 3 no console.
let num22 = 9;
if (num22 % 3 === 0) {
    console.log("Múltiplo de 3");
} else {
    console.log("Não é múltiplo de 3");
}

// 17) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é divisível por 5 no console.
let num23 = 20;
if (num23 % 5 === 0) {
    console.log("Divisível por 5");
} else {
    console.log("Não é divisível por 5");
}

// 18) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a soma desses números no console.
let num24 = 10;
let num25 = 15;
console.log(num24 + num25);

// 19) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a subtração desses números no console.
let num26 = 30;
let num27 = 12;
console.log(num26 - num27);

// 20) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o produto desses números no console.
let num28 = 8;
let num29 = 5;
console.log(num28 * num29);

// 21) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba a divisão desses números no console.
let num30 = 20;
let num31 = 4;
console.log(num30 / num31);

// 22) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o quadrado desse número no console.
let num32 = 6;
console.log(num32 * num32);

// 23) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a raiz quadrada desse número no console.
let num33 = 64;
console.log(Math.sqrt(num33));

// 24) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba o módulo desse número (valor absoluto) no console.
let num34 = -9;
console.log(Math.abs(num34));

// 25) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é par ou ímpar no console.
let num35 = 11;
if (num35 % 2 === 0) {
    console.log("Par");
} else {
    console.log("Ímpar");
}

// 26) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é positivo, negativo ou zero no console.
let num36 = -3;
if (num36 > 0) {
    console.log("Positivo");
} else if (num36 < 0) {
    console.log("Negativo");
} else {
    console.log("Zero");
}

// 27) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o maior número no console.
let num37 = 30;
let num38 = 25;
console.log(Math.max(num37, num38));

// 28) Declare duas variáveis e atribua a elas valores numéricos. Em seguida, exiba o menor número no console.
let num39 = 8;
let num40 = 4;
console.log(Math.min(num39, num40));

// 29) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é primo ou não no console.
let num41 = 7;
let isPrime2 = true;
if (num41 === 1) {
    isPrime2 = false;
} else {
    for (let i = 2; i <= Math.sqrt(num41); i++) {
        if (num41 % i === 0) {
            isPrime2 = false;
            break;
        }
    }
}
if (isPrime2 && num41 > 1) {
    console.log("Primo");
} else {
    console.log("Não primo");
}

// 30) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba todos os números de 1 até o número fornecido no console.
let num42 = 10;
for (let i = 1; i <= num42; i++) {
    console.log(i);
}

// 31) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a tabuada desse número no console.
let num43 = 7;
for (let i = 1; i <= 10; i++) {
    console.log(num43 + " x " + i + " = " + num43 * i);
}

// 32) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é um quadrado perfeito no console.
let num44 = 25;
if (Math.sqrt(num44) % 1 === 0) {
    console.log("Quadrado perfeito");
} else {
    console.log("Não é quadrado perfeito");
}

// 33) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é múltiplo de 3 no console.
let num45 = 9;
if (num45 % 3 === 0) {
    console.log("Múltiplo de 3");
} else {
    console.log("Não é múltiplo de 3");
}

// 34) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba se o número é divisível por 5 no console.
let num46 = 20;
if (num46 % 5 === 0) {
    console.log("Divisível por 5");
} else {
    console.log("Não é divisível por 5");
}

// 35) Declare uma variável e atribua a ela um valor numérico. Em seguida, exiba a soma de todos os números pares de 1 até o número fornecido no console.
let num47 = 10;
let sum = 0;
for (let i = 2; i <= num47; i += 2) {
    sum += i;
}
console.log("Soma dos números pares:", sum);


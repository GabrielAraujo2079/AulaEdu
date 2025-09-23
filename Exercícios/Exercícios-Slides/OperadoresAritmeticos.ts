// Gabriel Araujo - 2508678


// Explicação sobre Operadores Matemáticos e Aritméticos
// Professor: Eduardo Popovici

/*
Operadores matemáticos e aritméticos são utilizados para realizar operações matemáticas em valores numéricos.

1. Operadores Aritméticos Básicos:
   - Soma (+): Adiciona dois valores.
   - Subtração (-): Subtrai um valor de outro.
   - Multiplicação (*): Multiplica dois valores.
   - Divisão (/): Divide um valor pelo outro.
   - Módulo (%): Retorna o resto da divisão.
   - Exponenciação (**): Eleva um número a uma potência.

2. Operadores de Incremento e Decremento:
   - Incremento (++): Aumenta o valor em 1.
   - Decremento (--): Diminui o valor em 1.

3. Operadores de Atribuição:
   - Atribuição Simples (=): Define um valor para a variável.
   - Atribuição com soma (+=): Adiciona um valor à variável e armazena o resultado.
   - Atribuição com subtração (-=): Subtrai um valor da variável e armazena o resultado.
   - Atribuição com multiplicação (*=): Multiplica a variável por um valor e armazena o resultado.
   - Atribuição com divisão (/=): Divide a variável por um valor e armazena o resultado.
   - Atribuição com módulo (%=): Calcula o resto da divisão da variável por um valor e armazena o resultado.


Este operador é amplamente utilizado em programação para definir padrões de repetição, como em estruturas de loop e verificações condicionais.
*/

// Operadores Aritméticos.
let a: number = 10;
let b: number = 5;

console.log("Soma:", a + b);        // Adição
console.log("Subtração:", a - b);   // Subtração
console.log("Multiplicação:", a * b); // Multiplicação
console.log("Divisão:", a / b);     // Divisão
console.log("Módulo:", a % b);     // Resto da divisão
console.log("Exponenciação:", a ** b); // Potenciação

// Operadores de Incremento e Decremento
let contador: number = 0;
contador++; // Incremento 
console.log("Incremento:", contador);
contador--; // Decremento 
console.log("Decremento:", contador);

// Operadores de Atribuição
let x: number = 20;
x += 10; // Equivalente a x = x + 10
console.log("Atribuição de Soma:", x);
x -= 5; // Equivalente a x = x - 5
console.log("Atribuição de Subtração:", x);
x *= 2; // Equivalente a x = x * 2
console.log("Atribuição de Multiplicação:", x);
x /= 4; // Equivalente a x = x / 4
console.log("Atribuição de Divisão:", x);
x %= 3; // Equivalente a x = x % 3
console.log("Atribuição de Módulo:", x);

// Precedência de Operadores
let resultado: number = 10 + 5 * 2;
console.log("Precedência Padrão:", resultado);
resultado = (10 + 5) * 2;
console.log("Uso de Parênteses:", resultado);

// Operadores Matemáticos em Funções
function calcularQuadrado(num: number): number {
    return num ** 2;
}
console.log("Quadrado de 4:", calcularQuadrado(4));

// Operador de Módulo
function ehParOuImpar(numero: number): string {
    return numero % 2 === 0 ? "Par" : "Ímpar";
}
console.log("O número 7 é:", ehParOuImpar(7));
console.log("O número 10 é:", ehParOuImpar(10));

// Função Matemática
function calcularFatorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * calcularFatorial(n - 1);
}
console.log("Fatorial de 5:", calcularFatorial(5));
console.log("Fatorial de 7:", calcularFatorial(7));

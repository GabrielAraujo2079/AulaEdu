// Gabriel Araujo - 2508678


// Função sem parâmetros que exibe uma mensagem fixa.
function saudacao(): void {
  console.log("Olá, Mundo!");
}

// Chamando a função
saudacao();



// Função que recebe um nome e exibe uma saudação personalizada.
function dizerOla(nome: string): void {
  console.log(`Olá, ${nome}!`);
}

dizerOla("Eduardo");
dizerOla("Pietro");



// Função que recebe dois números e retorna a soma.
function somar(a: number, b: number): number {
  return a + b;
}

console.log(`Resultado: ${somar(10, 5)}`);



// Função que retorna a diferença entre dois números.
function subtrair(a: number, b: number): number {
  return a - b;
}

console.log(`Resultado: ${subtrair(20, 8)}`);



// Função que retorna o produto de dois números.
function multiplicar(a: number, b: number): number {
  return a * b;
}

console.log(`Resultado: ${multiplicar(6, 7)}`);



// Função que retorna o quociente de dois números.
function dividir(a: number, b: number): number {
  if (b === 0) {
    console.log("Erro: divisão por zero");
    return NaN;
  }
  return a / b;
}

console.log(`Resultado: ${dividir(20, 4)}`);



// Função que retorna o dobro de um número.
function dobro(n: number): number {
  return n * 2;
}

console.log(`Dobro de 12 = ${dobro(12)}`);



// Função que verifica se um número é par ou ímpar.
function parOuImpar(n: number): string {
  if (n % 2 === 0) {
    return "Par";
  } else {
    return "Ímpar";
  }
}

console.log(`7 é ${parOuImpar(7)}`);



// Função que calcula a média de três notas.
function media(n1: number, n2: number, n3: number): number {
  return (n1 + n2 + n3) / 3;
}

console.log(`Média = ${media(7, 8, 6).toFixed(2)}`);



// Função que verifica se o aluno foi aprovado considerando nota e faltas.
function verificarAprovacao(nota: number, faltas: number): string {
  if (nota >= 7 && faltas <= 10) {
    return "Aprovado";
  } else {
    return "Reprovado";
  }
}

console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));


// Função que calcula o fatorial usando laço for.
function fatorial(n: number): number {
  let resultado = 1;
  for (let i = n; i > 1; i--) {
    resultado *= i;
  }
  return resultado;
}

console.log(`Fatorial de 5 = ${fatorial(5)}`);



// Função que calcula o valor final com juros simples.
function jurosSimples(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}

console.log(`VF = R$ ${jurosSimples(1000, 0.05, 12).toFixed(2)}`);



// Função que converte temperatura de Celsius para Fahrenheit.
function celsiusParaFahrenheit(c: number): number {
  return c * 1.8 + 32;
}

console.log(`25°C = ${celsiusParaFahrenheit(25)}°F`);



// Função que realiza operações básicas.
function calculadora(a: number, b: number, op: string): number {
  if (op === "+") return a + b;
  if (op === "-") return a - b;
  if (op === "*") return a * b;
  if (op === "/") {
    if (b === 0) {
      console.log("Erro: divisão por zero.");
      return NaN;
    }
    return a / b;
  }
  console.log("Operador inválido!");
  return NaN;
}

// Exemplos
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));



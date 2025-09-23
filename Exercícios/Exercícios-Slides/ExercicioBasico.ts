//Gabriel Araujo - 2508678

// Imprime uma mensagem no console.
console.log("Olá, TypeScript!");



// Variáveis de diferentes tipos, Junto com uma frase formatada.
let nome: string = "Eduardo";
let idade: number = 38;
let cidade: string = "São Paulo";
console.log(`Meu nome é ${nome}, tenho ${idade} anos e moro em ${cidade}.`);



// Verifica se um número é par ou ímpar.
let numero: number = 17; // altere para testar
if (numero % 2 === 0) {
  console.log(`${numero} é PAR.`);
} else {
  console.log(`${numero} é ÍMPAR.`);
}


// Estrutura condicional para informar se a pessoa é maior ou menor de idade.
let idadePessoa: number = 16; // altere para testar
if (idadePessoa >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}


// Calcula a média de três notas e informa se o aluno foi aprovado ou reprovado.
let n1: number = 7;
let n2: number = 5;
let n3: number = 9;
let media2: number = (n1 + n2 + n3) / 3;
console.log(`Média: ${media2.toFixed(2)}`);
if (media2 >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}


// Verifica aprovação considerando nota e limite de faltas.
let materia: string = "Matemática";
let nota: number = 8;      
let faltas: number = 12;   
if (nota >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
} else {
  console.log(`Reprovado em ${materia} (nota: ${nota}, faltas: ${faltas})`);
}


// Utiliza um laço for para imprimir a tabuada de um número.
let base: number = 7;
for (let i = 1; i <= 10; i++) {
  console.log(`${base} x ${i} = ${base * i}`);
}


// Faz uma contagem regressiva e exibe uma mensagem ao finalizar.
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Lançar foguete!");



// Cria uma função que retorna a soma de dois números.
function somar2(a: number, b: number): number {
  return a + b;
}
// Exemplo de chamada da função
let resultadoSoma = somar2(12, 30);
console.log(`Soma: ${resultadoSoma}`);


// Função que realiza operações básicas e impede divisão por zero.
function calcular(a: number, b: number, op: string): number {
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
  console.log("Operação inválida. Use +, -, * ou /.");
  return NaN;
}
// Exemplos de uso da calculadora 
console.log(`10 + 5 = ${calcular(10, 5, "+")}`);
console.log(`10 - 5 = ${calcular(10, 5, "-")}`);
console.log(`10 * 5 = ${calcular(10, 5, "*")}`);
console.log(`10 / 5 = ${calcular(10, 5, "/")}`);


// Função para calcular o valor com juros simples.
function jurosSimples1(capital: number, taxa: number, tempo: number): number {
  return capital + (capital * taxa * tempo);
}
// Exemplo de cálculo de juros simples
let capitalS = 1000;
let taxa = 0.05;
let tempo = 12;
let vfSimples = jurosSimples1(capitalS, taxa, tempo);
console.log(`Juros simples -> VF: R$ ${vfSimples.toFixed(2)}`);


// Função para calcular o valor com juros compostos.
function jurosCompostos(capital: number, taxa: number, tempo: number): number {
  return capital * Math.pow(1 + taxa, tempo);
}
// Exemplo de cálculo de juros compostos
let capitalC = 1000;
let taxaC = 0.05;
let tempoC = 12;
let vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log(`Juros compostos -> VF: R$ ${vfCompostos.toFixed(2)}`);



// Função para converter Celsius em Fahrenheit.
function celsiusParaFahrenheit1(celsius: number): number {
  return celsius * 1.8 + 32;
}
// Exemplo de conversão
let c = 25;
let f = celsiusParaFahrenheit1(c);
console.log(`${c}°C equivalem a ${f.toFixed(1)}°F`);


// Função que retorna o conceito de acordo com a nota.
function conceito(nota: number): string {
  if (nota >= 90) return "A";
  else if (nota >= 80) return "B";
  else if (nota >= 70) return "C";
  else if (nota >= 60) return "D";
  else return "F";
}
// Exemplos de classificação de notas
console.log(`Nota 95 -> Conceito ${conceito(95)}`);
console.log(`Nota 82 -> Conceito ${conceito(82)}`);
console.log(`Nota 73 -> Conceito ${conceito(73)}`);
console.log(`Nota 61 -> Conceito ${conceito(61)}`);
console.log(`Nota 42 -> Conceito ${conceito(42)}`);

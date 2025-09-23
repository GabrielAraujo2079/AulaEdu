//Gabriel Araujo - 2508678
// Imprime uma mensagem no console.
console.log("Olá, TypeScript!");
// Variáveis de diferentes tipos, Junto com uma frase formatada.
var nome = "Eduardo";
var idade = 38;
var cidade = "São Paulo";
console.log("Meu nome \u00E9 ".concat(nome, ", tenho ").concat(idade, " anos e moro em ").concat(cidade, "."));
// Verifica se um número é par ou ímpar.
var numero = 17; // altere para testar
if (numero % 2 === 0) {
    console.log("".concat(numero, " \u00E9 PAR."));
}
else {
    console.log("".concat(numero, " \u00E9 \u00CDMPAR."));
}
// Estrutura condicional para informar se a pessoa é maior ou menor de idade.
var idadePessoa = 16; // altere para testar
if (idadePessoa >= 18) {
    console.log("Maior de idade.");
}
else {
    console.log("Menor de idade.");
}
// Calcula a média de três notas e informa se o aluno foi aprovado ou reprovado.
var n1 = 7;
var n2 = 5;
var n3 = 9;
var media2 = (n1 + n2 + n3) / 3;
console.log("M\u00E9dia: ".concat(media2.toFixed(2)));
if (media2 >= 6) {
    console.log("Aprovado");
}
else {
    console.log("Reprovado");
}
// Verifica aprovação considerando nota e limite de faltas.
var materia = "Matemática";
var nota = 8;
var faltas = 12;
if (nota >= 7 && faltas <= 10) {
    console.log("Aprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
else {
    console.log("Reprovado em ".concat(materia, " (nota: ").concat(nota, ", faltas: ").concat(faltas, ")"));
}
// Utiliza um laço for para imprimir a tabuada de um número.
var base = 7;
for (var i = 1; i <= 10; i++) {
    console.log("".concat(base, " x ").concat(i, " = ").concat(base * i));
}
// Faz uma contagem regressiva e exibe uma mensagem ao finalizar.
for (var i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Lançar foguete!");
// Cria uma função que retorna a soma de dois números.
function somar2(a, b) {
    return a + b;
}
// Exemplo de chamada da função
var resultadoSoma = somar2(12, 30);
console.log("Soma: ".concat(resultadoSoma));
// Função que realiza operações básicas e impede divisão por zero.
function calcular(a, b, op) {
    if (op === "+")
        return a + b;
    if (op === "-")
        return a - b;
    if (op === "*")
        return a * b;
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
console.log("10 + 5 = ".concat(calcular(10, 5, "+")));
console.log("10 - 5 = ".concat(calcular(10, 5, "-")));
console.log("10 * 5 = ".concat(calcular(10, 5, "*")));
console.log("10 / 5 = ".concat(calcular(10, 5, "/")));
// Função para calcular o valor com juros simples.
function jurosSimples1(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
// Exemplo de cálculo de juros simples
var capitalS = 1000;
var taxa = 0.05;
var tempo = 12;
var vfSimples = jurosSimples1(capitalS, taxa, tempo);
console.log("Juros simples -> VF: R$ ".concat(vfSimples.toFixed(2)));
// Função para calcular o valor com juros compostos.
function jurosCompostos(capital, taxa, tempo) {
    return capital * Math.pow(1 + taxa, tempo);
}
// Exemplo de cálculo de juros compostos
var capitalC = 1000;
var taxaC = 0.05;
var tempoC = 12;
var vfCompostos = jurosCompostos(capitalC, taxaC, tempoC);
console.log("Juros compostos -> VF: R$ ".concat(vfCompostos.toFixed(2)));
// Função para converter Celsius em Fahrenheit.
function celsiusParaFahrenheit1(celsius) {
    return celsius * 1.8 + 32;
}
// Exemplo de conversão
var c = 25;
var f = celsiusParaFahrenheit1(c);
console.log("".concat(c, "\u00B0C equivalem a ").concat(f.toFixed(1), "\u00B0F"));
// Função que retorna o conceito de acordo com a nota.
function conceito(nota) {
    if (nota >= 90)
        return "A";
    else if (nota >= 80)
        return "B";
    else if (nota >= 70)
        return "C";
    else if (nota >= 60)
        return "D";
    else
        return "F";
}
// Exemplos de classificação de notas
console.log("Nota 95 -> Conceito ".concat(conceito(95)));
console.log("Nota 82 -> Conceito ".concat(conceito(82)));
console.log("Nota 73 -> Conceito ".concat(conceito(73)));
console.log("Nota 61 -> Conceito ".concat(conceito(61)));
console.log("Nota 42 -> Conceito ".concat(conceito(42)));

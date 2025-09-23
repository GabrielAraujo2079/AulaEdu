// Gabriel Araujo - 2508678
// Função sem parâmetros que exibe uma mensagem fixa.
function saudacao() {
    console.log("Olá, Mundo!");
}
// Chamando a função
saudacao();
// Função que recebe um nome e exibe uma saudação personalizada.
function dizerOla(nome) {
    console.log("Ol\u00E1, ".concat(nome, "!"));
}
dizerOla("Eduardo");
dizerOla("Pietro");
// Função que recebe dois números e retorna a soma.
function somar(a, b) {
    return a + b;
}
console.log("Resultado: ".concat(somar(10, 5)));
// Função que retorna a diferença entre dois números.
function subtrair(a, b) {
    return a - b;
}
console.log("Resultado: ".concat(subtrair(20, 8)));
// Função que retorna o produto de dois números.
function multiplicar(a, b) {
    return a * b;
}
console.log("Resultado: ".concat(multiplicar(6, 7)));
// Função que retorna o quociente de dois números.
function dividir(a, b) {
    if (b === 0) {
        console.log("Erro: divisão por zero");
        return NaN;
    }
    return a / b;
}
console.log("Resultado: ".concat(dividir(20, 4)));
// Função que retorna o dobro de um número.
function dobro(n) {
    return n * 2;
}
console.log("Dobro de 12 = ".concat(dobro(12)));
// Função que verifica se um número é par ou ímpar.
function parOuImpar(n) {
    if (n % 2 === 0) {
        return "Par";
    }
    else {
        return "Ímpar";
    }
}
console.log("7 \u00E9 ".concat(parOuImpar(7)));
// Função que calcula a média de três notas.
function media(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}
console.log("M\u00E9dia = ".concat(media(7, 8, 6).toFixed(2)));
// Função que verifica se o aluno foi aprovado considerando nota e faltas.
function verificarAprovacao(nota, faltas) {
    if (nota >= 7 && faltas <= 10) {
        return "Aprovado";
    }
    else {
        return "Reprovado";
    }
}
console.log(verificarAprovacao(8, 5));
console.log(verificarAprovacao(6, 12));
// Função que calcula o fatorial usando laço for.
function fatorial(n) {
    var resultado = 1;
    for (var i = n; i > 1; i--) {
        resultado *= i;
    }
    return resultado;
}
console.log("Fatorial de 5 = ".concat(fatorial(5)));
// Função que calcula o valor final com juros simples.
function jurosSimples(capital, taxa, tempo) {
    return capital + (capital * taxa * tempo);
}
console.log("VF = R$ ".concat(jurosSimples(1000, 0.05, 12).toFixed(2)));
// Função que converte temperatura de Celsius para Fahrenheit.
function celsiusParaFahrenheit(c) {
    return c * 1.8 + 32;
}
console.log("25\u00B0C = ".concat(celsiusParaFahrenheit(25), "\u00B0F"));
// Função que realiza operações básicas.
function calculadora(a, b, op) {
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
    console.log("Operador inválido!");
    return NaN;
}
// Exemplos
console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));

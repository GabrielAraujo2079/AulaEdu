// Gabriel Araujo - 2508678

// Verifica se um número é positivo ou negativo.
let numero: number = -5;

if (numero >= 0) {
  console.log(`${numero} é positivo.`);
} else {
  console.log(`${numero} é negativo.`);
}



// Verifica se um número é par ou ímpar.
let valor: number = 12;

if (valor % 2 === 0) {
  console.log(`${valor} é par.`);
} else {
  console.log(`${valor} é ímpar.`);
}



// Verifica se a pessoa é maior ou menor de idade.
let idade: number = 17;

if (idade >= 18) {
  console.log("Maior de idade.");
} else {
  console.log("Menor de idade.");
}



// Verifica se o aluno foi aprovado.
let nota: number = 5;

if (nota >= 6) {
  console.log("Aluno aprovado.");
} else {
  console.log("Aluno reprovado.");
}



// Classifica a idade em criança, adolescente, adulto ou idoso.
let idadePessoa: number = 35;

if (idadePessoa < 12) {
  console.log("Criança");
} else if (idadePessoa < 18) {
  console.log("Adolescente");
} else if (idadePessoa < 60) {
  console.log("Adulto");
} else {
  console.log("Idoso");
}



// Verifica aprovação considerando nota e faltas.
let materia: string = "Matemática";
let notaFinal: number = 8;
let faltas: number = 12;

if (notaFinal >= 7 && faltas <= 10) {
  console.log(`Aprovado em ${materia}.`);
} else {
  console.log(`Reprovado em ${materia}.`);
}



// Verifica se usuário e senha estão certos.
let usuario: string = "admin";
let senha: string = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Login realizado com sucesso!");
} else {
  console.log("Usuário ou senha inválidos.");
}



// Idosos (>=60) têm direito a desconto.
let idadeCliente: number = 65;

if (idadeCliente >= 60) {
  console.log("Cliente tem direito a desconto.");
} else {
  console.log("Cliente não tem desconto.");
}



// Verifica se a senha tem pelo menos 8 digitos.
let senhaNova: string = "abc12345";

if (senhaNova.length >= 8) {
  console.log("Senha forte.");
} else {
  console.log("Senha fraca. Deve ter 8 ou mais caracteres.");
}



// Mostra qual número é maior entre dois valores ou se são iguais.
let a: number = 25;
let b: number = 42;

if (a > b) {
  console.log(`${a} é maior que ${b}.`);
} else if (b > a) {
  console.log(`${b} é maior que ${a}.`);
} else {
  console.log("Os números são iguais.");
}



// Mostra se o dia é útil  ou final de semana.
let dia: number = 6; 

if (dia >= 1 && dia <= 5) {
  console.log("Dia útil.");
} else if (dia === 6 || dia === 7) {
  console.log("Final de semana.");
} else {
  console.log("Número inválido para dia.");
}



// Classifica nota com conceito A, B, C, D ou F.
let notaAluno: number = 82;

if (notaAluno >= 90) {
  console.log("Conceito A");
} else if (notaAluno >= 80) {
  console.log("Conceito B");
} else if (notaAluno >= 70) {
  console.log("Conceito C");
} else if (notaAluno >= 60) {
  console.log("Conceito D");
} else {
  console.log("Conceito F");
}



// Classifica a temperatura como frio, agradável ou quente.
let temperatura: number = 28;

if (temperatura < 15) {
  console.log("Está frio.");
} else if (temperatura <= 25) {
  console.log("Clima agradável.");
} else {
  console.log("Está quente.");
}



// Verifica se três lados formam um triângulo válido.
let lado1: number = 5;
let lado2: number = 7;
let lado3: number = 10;

if (lado1 < lado2 + lado3 &&
    lado2 < lado1 + lado3 &&
    lado3 < lado1 + lado2) {
  console.log("Forma um triângulo válido.");
} else {
  console.log("Não forma um triângulo.");
}



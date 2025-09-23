// Gabriel Araujo - 2508678
// Nome do aluno, suas notas e o número de faltas por matéria
var nomeAluno1 = "João";
var notaMatematica1 = 8;
var notaPortugues1 = 7;
var notaCiencias1 = 6;
var faltasMatematica1 = 3;
var faltasPortugues1 = 2;
var faltasCiencias1 = 6;
// Verifica a situação do aluno nas matérias considerando as faltas
if (notaMatematica1 >= 7 && faltasMatematica1 <= 5) {
    console.log("".concat(nomeAluno1, " foi aprovado em Matem\u00E1tica!"));
}
else if (faltasMatematica1 > 5) {
    console.log("".concat(nomeAluno1, " foi reprovado em Matem\u00E1tica devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Matem\u00E1tica devido \u00E0 nota."));
}
if (notaPortugues1 >= 7 && faltasPortugues1 <= 5) {
    console.log("".concat(nomeAluno1, " foi aprovado em Portugu\u00EAs!"));
}
else if (faltasPortugues1 > 5) {
    console.log("".concat(nomeAluno1, " foi reprovado em Portugu\u00EAs devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Portugu\u00EAs devido \u00E0 nota."));
}
if (notaCiencias1 >= 7 && faltasCiencias1 <= 5) {
    console.log("".concat(nomeAluno1, " foi aprovado em Ci\u00EAncias!"));
}
else if (faltasCiencias1 > 5) {
    console.log("".concat(nomeAluno1, " foi reprovado em Ci\u00EAncias devido ao n\u00FAmero de faltas."));
}
else {
    console.log("".concat(nomeAluno1, " foi reprovado em Ci\u00EAncias devido \u00E0 nota."));
}

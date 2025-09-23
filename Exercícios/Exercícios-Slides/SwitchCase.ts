// Gabriel Araujo - 2508678

let mes: number = 4;
// Estrutura switch para verificar o valor da variável "mes" e exibir o nome correspondente do mês.


switch (mes) {
    case 1: // "case" verifica se a variável "mes" tem o valor semelhante ao citado.
        console.log("Janeiro"); 
        break; // Interrompe a execução para evitar a execução de outros casos.
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    case 4:
        console.log("Abril");
        break;
    case 5:
        console.log("Maio");
        break;
    case 6:
        console.log("Junho");
        break;
    case 7:
        console.log("Julho");
        break;
    case 8:
        console.log("Agosto");
        break;
    case 9:
        console.log("Setembro");
        break;
    case 10:
        console.log("Outubro");
        break;
    case 11:
        console.log("Novembro");
        break;
    case 12:
        console.log("Dezembro");
        break;
    default: // "default" é executado quando nenhum dos "case" anteriores são usados.
        console.log("Mês inválido"); // Caso o usuario digite um mes que não exista "Mês inválido".
}

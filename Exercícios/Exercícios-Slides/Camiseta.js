//Gabriel Araujo - 2508678
/*calcula o preço final de uma camiseta após aplicar um desconto
Variável 'camiseta' com o preço de 80 reais */
var camiseta = 80;
// 'Desconto' com o valor de 15% (0.15)
var desconto = 0.15;
// Calcula o valor do desconto multiplicando o preço pela porcentagem
var valorDesconto = camiseta * desconto;
// Calcula o preço final subtraindo o valor do desconto do preço original
var precoFinal = camiseta - valorDesconto;
//Mostra os valores no console.
console.log("Preço original: R$", camiseta);
console.log("Desconto: R$", valorDesconto);
console.log("Preço final com desconto: R$", precoFinal);

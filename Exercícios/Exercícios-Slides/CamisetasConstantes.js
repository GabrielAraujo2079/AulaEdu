//Gabriel Araujo - 2508678
// Utiliza constantes tipadas para garantir que os valores não sejam alterados
// 'Camiseta1' com o preço original de 80 reais
var camiseta1 = 80;
//' Desconto1' com o valor de 15% (0.15)
var desconto1 = 0.15;
// Valor do desconto
var valorDesconto1 = camiseta1 * desconto1;
// Preço final após o desconto
var precoFinal1 = camiseta1 - valorDesconto1;
// Mostra o preço final no console
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);

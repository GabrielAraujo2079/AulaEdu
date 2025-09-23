//Gabriel Araujo - 2508678

// Utiliza constantes tipadas para garantir que os valores não sejam alterados

// 'Camiseta1' com o preço original de 80 reais
const camiseta1: number = 80;

//' Desconto1' com o valor de 15% (0.15)
const desconto1: number = 0.15;

// Valor do desconto
const valorDesconto1: number = camiseta1 * desconto1;

// Preço final após o desconto
const precoFinal1: number = camiseta1 - valorDesconto1;

// Mostra o preço final no console
console.log("Preço original: R$", camiseta1);
console.log("Desconto: R$", valorDesconto1);
console.log("Preço final com desconto: R$", precoFinal1);

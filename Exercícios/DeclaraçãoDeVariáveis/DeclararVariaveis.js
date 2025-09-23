"use strict";
// Declaração de Variáveis Gabriel Araujo - 2508678
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
// O TypeScript já entende o tipo só pelo valor que você coloca.
var idade = 18;
var nome = 'Eduardo';
var ativo = true;
console.log('1) Inferência:', { idade: idade, nome: nome, ativo: ativo });
//você fala pro TypeScript qual é o tipo de cada variável.
var taxa = 12.5;
var mensagem = 'Olá, mundo';
var habilitado = false;
console.log('2) Explícitos:', { taxa: taxa, mensagem: mensagem, habilitado: habilitado });
// Dá pra criar arrays só de string, só de número.
var placas = ['ABC1D23', 'XYZ9K88'];
var notas = [8, 9, 10];
console.log('3) Arrays:', { placas: placas, notas: notas });
// Tupla tem tamanho e tipos definidos, nesse caso tem dois números.
var coordenada = [23.5, -46.6];
console.log('4) Tupla:', coordenada);
var carro = { placa: 'ABC1D23', modelo: 'Onix', ano: 2020 };
console.log('5) Objeto + type:', carro);
// Dá pra deixar uma variável aceitar mais de um tipo usando  |.
var id = 42;
id = '42';
console.log('6) União:', id);
var statusTicket = 'ABERTO';
var PI = 3.14159; // não muda nunca
var config = { tema: 'dark', versao: 1 }; // propriedades travadas
console.log('7) Literais/readonly:', { statusTicket: statusTicket, PI: PI, config: config });
/*Enum é quse uma lista fechada de opções.
fácilitando usar e comparar depois. */
var TipoVeiculo;
(function (TipoVeiculo) {
    TipoVeiculo["Carro"] = "carro";
    TipoVeiculo["Moto"] = "moto";
    TipoVeiculo["Caminhao"] = "caminhao";
})(TipoVeiculo || (TipoVeiculo = {}));
var tipo = TipoVeiculo.Carro;
console.log('8) Enum:', tipo);
//cria Map com chave e valor tipados.
var tabelaPrecos = new Map();
tabelaPrecos.set('carro', 12.5).set('moto', 8.0).set('caminhao', 20);
console.log('9) Map genérico:', Array.from(tabelaPrecos.entries()));
/*cria um tipo só com os valores de um array constante.
 Assim, 'minhaCor' só aceita 'vermelho' ou 'azul'. */
var cores = ['vermelho', 'azul'];
var minhaCor = 'azul';
console.log('10) as const:', { cores: __spreadArray([], cores, true), minhaCor: minhaCor });
var u = { id: 'u1', nome: 'Ana' };
console.log('11) Interface:', u);
// Dá pra definir o tipo dos parâmetros e do retorno.
function soma(a, b) { return a + b; }
var somar = function (x, y) { return x + y; };
console.log('12) Funções:', soma(2, 3), somar(5, 7));
// Função genérica funciona com qualquer tipo, O tipo é decidido na hora de usar.
function identidade(valor) { return valor; }
console.log('13) Genérica:', identidade('ok'), identidade(99));
/* Dá pra refinar o tipo de uma variável usando 'typeof'
se for número, formata com zeros; se for string, deixa maiúsculo. */
function formatarId(val) {
    if (typeof val === 'number')
        return val.toString().padStart(3, '0');
    return val.toUpperCase();
}
console.log('14) Narrowing:', formatarId(7), formatarId('abc'));

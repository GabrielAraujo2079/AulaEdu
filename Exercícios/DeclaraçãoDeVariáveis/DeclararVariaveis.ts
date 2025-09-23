// Declaração de Variáveis Gabriel Araujo - 2508678

// O TypeScript já entende o tipo só pelo valor que você coloca.
let idade = 18;
const nome = 'Eduardo';
let ativo = true;
console.log('1) Inferência:', { idade, nome, ativo });



//você fala pro TypeScript qual é o tipo de cada variável.
let taxa: number = 12.5;
const mensagem: string = 'Olá, mundo';
let habilitado: boolean = false;
console.log('2) Explícitos:', { taxa, mensagem, habilitado });



// Dá pra criar arrays só de string, só de número.
const placas: string[] = ['ABC1D23', 'XYZ9K88'];
const notas: Array<number> = [8, 9, 10];
console.log('3) Arrays:', { placas, notas });


// Tupla tem tamanho e tipos definidos, nesse caso tem dois números.
const coordenada: [number, number] = [23.5, -46.6];
console.log('4) Tupla:', coordenada);


// O 'type' cria um apelido pra um tipo de objeto.
type Veiculo = { placa: string; modelo: string; ano: number };
const carro: Veiculo = { placa: 'ABC1D23', modelo: 'Onix', ano: 2020 };
console.log('5) Objeto + type:', carro);



// Dá pra deixar uma variável aceitar mais de um tipo usando  |.
let id: number | string = 42;
id = '42'; 
console.log('6) União:', id);



/* 'as const' deixa o valor travado.
Tipo literal só aceita os valores que você definiu. */
type StatusTicket = 'ABERTO' | 'FECHADO';
const statusTicket: StatusTicket = 'ABERTO';
const PI = 3.14159 as const; // não muda nunca
const config = { tema: 'dark', versao: 1 } as const; // propriedades travadas
console.log('7) Literais/readonly:', { statusTicket, PI, config });


/*Enum é quse uma lista fechada de opções.
fácilitando usar e comparar depois. */
enum TipoVeiculo { Carro = 'carro', Moto = 'moto', Caminhao = 'caminhao' }
const tipo: TipoVeiculo = TipoVeiculo.Carro;
console.log('8) Enum:', tipo);



//cria Map com chave e valor tipados.

const tabelaPrecos = new Map<string, number>();
tabelaPrecos.set('carro', 12.5).set('moto', 8.0).set('caminhao', 20);
console.log('9) Map genérico:', Array.from(tabelaPrecos.entries()));



/*cria um tipo só com os valores de um array constante.
 Assim, 'minhaCor' só aceita 'vermelho' ou 'azul'. */
const cores = ['vermelho', 'azul'] as const;
type Cor = typeof cores[number];
const minhaCor: Cor = 'azul';
console.log('10) as const:', { cores: [...cores], minhaCor });



// Interface deixa criar objetos com propriedades opcionais e travadas.
// 'id' não pode mudar, 'email' pode faltar.
interface Usuario {
  readonly id: string;
  nome: string;
  email?: string;
}
const u: Usuario = { id: 'u1', nome: 'Ana' };
console.log('11) Interface:', u);



// Dá pra definir o tipo dos parâmetros e do retorno.
function soma(a: number, b: number): number { return a + b; }
const somar: (x: number, y: number) => number = (x, y) => x + y;
console.log('12) Funções:', soma(2, 3), somar(5, 7));


// Função genérica funciona com qualquer tipo, O tipo é decidido na hora de usar.
function identidade<T>(valor: T): T { return valor; }
console.log('13) Genérica:', identidade<string>('ok'), identidade<number>(99));



/* Dá pra refinar o tipo de uma variável usando 'typeof'
se for número, formata com zeros; se for string, deixa maiúsculo. */
function formatarId(val: number | string): string {
  if (typeof val === 'number') return val.toString().padStart(3, '0');
  return val.toUpperCase();
}
console.log('14) Narrowing:', formatarId(7), formatarId('abc'));

// garante que o arquivo vira módulo TypeScript.
export {};
//LAB1 Gabriel Araujo - 2508678


/* O TypeScript identifica o tipo das variáveis com base no valor adicionado.
o TypeScript já entende sozinho o tipo das variáveis só pelo valor que você coloca. 
Então, 'nomeAluno' vira string, 'nota1' e 'nota2' são números, e 'aprovado' é só um booleano.
 */
const nomeAluno = 'Ana';
let nota1 = 8.5;     // number
let nota2 = 7;       // number
let aprovado = true; // boolean
console.log('1) Variáveis:', { nomeAluno, nota1, nota2, aprovado }, '\n');

/*
faz a média e já arredonda pra duas casas decimais.
Colocar os tipos deixa tudo mais facil. */
function media(a: number, b:number): number{
    return Number(((a + b) / 2).toFixed(2));
}
const mediaAna = media(nota1, nota2);
console.log('2) Média da Ana: ', mediaAna, '\n');

/*
rray de notas. O 'filter'  filtra é pega só as notas acima de 8.
O 'map' dá aquele boost de 0.5 em cada nota, mas nunca passa de 10. */
const notas: number[] = [6, 7.5, 8, 9.2, 10]; 
const acimaDe8 = notas.filter(n => n >= 8); // retorna notas >= 8
const mediasAjustadas = notas.map(n => Math.min(n + 0.5, 10)); // ajusta notas
console.log('3) Arrays:', { acimaDe8, mediasAjustadas },'\n' );


/*
Tupla é tipo um mini pacote: junta o nome e a média, bem prático pra guardar info rápida. 
*/
const registro: [string, number] = ['Edu', media(9, 8.5)];
console.log('4) Tupla (nome, media):', registro,'\n' );


/*
cria um tipo 'Aluno' com id, nome e notas.
Depois monta uma lista de alunos e calcula a média de cada um usando o 'reduce'*/
type Aluno = { id: string; nome: string; notas: number[] };
const alunos: Aluno[] = [
  { id: 'a1', nome: 'Ana',  notas: [8, 7.5, 9] },
  { id: 'a2', nome: 'Bia',  notas: [6, 6.5, 7] },
  { id: 'a3', nome: 'Cris', notas: [9.5, 8.5, 10] },
];

function mediaAluno(a: Aluno): number {
  const soma = a.notas.reduce((acc, n) => acc + n, 0); // soma todas as notas
  return Number((soma / a.notas.length).toFixed(2));   // retorna média
}
console.log('5) Médias:', alunos.map(a => ({ nome: a.nome, media: mediaAluno(a) })),'\n' );

/*
O tipo 'Id' pode ser número ou string. A função 'formatarId' deixa tudo legivel:
se for número, coloca zeros na frente; se for string, joga pra maiúsculo. */
type Id = number | string;
function formatarId(id: Id): string {
  return typeof id === 'number' ? id.toString().padStart(3, '0') : id.toUpperCase();
}
console.log('6) União:', formatarId(7), formatarId('a3'),'\n' );

/*
Enum é tipo uma lista de opções 
A função olha a média e já devolve o status */
enum StatusAluno { Aprovado = 'APROVADO', Recuperacao = 'RECUPERAÇÃO', Reprovado = 'REPROVADO' }
function statusPorMedia(m: number): StatusAluno {
  if (m >= 7) return StatusAluno.Aprovado;
  if (m >= 5) return StatusAluno.Recuperacao;
  return StatusAluno.Reprovado;
}
console.log('7) Status:', alunos.map(a => ({ nome: a.nome, status: statusPorMedia(mediaAluno(a)) })),'\n' );

/*
O Map serve como uma agenda: você coloca o nome do aluno e a média dele.
Depois fica mais fácil achar a média só pelo nome. */
const mediasPorNome = new Map<string, number>();
for (const a of alunos) mediasPorNome.set(a.nome, mediaAluno(a));
console.log('8) Map (nome→média):', Array.from(mediasPorNome.entries()),'\n' );

export {};
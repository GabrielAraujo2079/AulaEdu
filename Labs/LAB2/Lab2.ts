//LAB2 Gabriel Araujo - 2508678


/*A'Tipo' só aceita três opções: carro, moto ou caminhão.
'Placa' é só uma string */
type Tipo = 'carro' | 'moto' | 'caminhao';
type Placa = string;

interface Veiculo {
  placa: Placa;        // Placa do veículo, tipo "ABC1D23".
  tipo: Tipo;          // Só pode ser carro, moto ou caminhão.
  ano: number;         // Ano em que o veículo foi fabricado.
  fabricante: string;  // Marca do veículo, tipo "Honda" ou "Chevrolet".
  cor: string;         // Cor do veículo, qualquer cor que você quiser.
}

// cria um carro.
const v1: Veiculo = { placa: 'ABC1D23', tipo: 'carro', ano: 2020, fabricante: 'Chevrolet', cor: 'preto' };

console.log('1) Veículo:', v1);
// Mostra o carro que acabou de ser criado.



// Monta  uma frota de carro, moto e caminhão, cada um com suas infos.
const frota: Veiculo[] = [
  v1,
  { placa: 'XYZ9K88', tipo: 'moto', ano: 2018, fabricante: 'Honda', cor: 'vermelho' },
  { placa: 'JKL2M34', tipo: 'caminhao', ano: 2022, fabricante: 'Volvo', cor: 'branco' },
];

// Quer somente os carros, Filtra eles
const soCarros = frota.filter(v => v.tipo === 'carro');

// Quer saber os anos dos veículos, Mapeia com map.
const anos = frota.map(v => v.ano);

console.log('2) Filtros/Map:', { soCarros, anos });
// Mostra os carros e os anos de todos os veículos.




// Enum é quase uma lista fechada de cores ja adicionadas.
enum CorPadrao { Preto = 'preto', Branco = 'branco', Vermelho = 'vermelho' }

// Função que "pinta" o veículo.
function pintar(v: Veiculo, cor: CorPadrao): Veiculo {
  return { ...v, cor };
}

console.log('3) Pintando veículo:', pintar(v1, CorPadrao.Branco));
// Exeplo: mostra o carro pintado de branco.



// Essa função pega qualquer placa, tira os símbolos e deixa maiúsculo.
function normalizarPlaca(p: string): Placa {
  return p.replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

console.log('4) Placa normalizada:', normalizarPlaca('abc-1d23'));
// Mostra a placa depois de "normalizar".



// separar os veículos por tipo.
const porTipo = new Map<Tipo, Veiculo[]>();

for (const v of frota) {
  const arr = porTipo.get(v.tipo) ?? [];
  arr.push(v);
  porTipo.set(v.tipo, arr);
}

console.log('5) Agrupados por tipo:', Array.from(porTipo.entries()));
// Mostra  a divisão dos veículos por tipo.

export {};
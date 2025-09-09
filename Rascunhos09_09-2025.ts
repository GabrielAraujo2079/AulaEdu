
let aluno = {
    nome: "Gabriel",
    nota: 7.8,
    faltas: 2
}
console.log(aluno);
console.log(aluno.nome);
console.log(aluno.nota);
console.log(aluno.faltas); 
/*--------------------------------------------------------------- */

type Aluno = {
    nome: string;
    nota: number;
    faltas: number;
}; 


let aluno1: Aluno = {
    nome: "Joao",
    nota: 7.5,
    faltas: 1

}


interface Aluno {
    nome: string;
    nota: number;
    faltas: number;
} 
/*--------------------------------------------------------------- */



//Definindo um tipo para produto
type Produto = {
    nome: string;
    preco: number;
    emEstoque: boolean
};

let Produto1: Produto = {
    nome:"Notebook",
    preco: 2500,
    emEstoque: true
}

console.log(`${Produto1.nome} custa R$ ${Produto1.preco} e esta em estoque? ${Produto1.emEstoque}`);

/*--------------------------------------------------------------- */
// Definindo uma interface para Cliente
interface Cliente {
    nome: string,
    idade: number,
    vip: boolean
}

// Criando um Cliente
let cliente1: Cliente = {
    nome: "Honda-San",
    idade: 28,
    vip: true
};
//Imprimindo os dados
console.log(`${cliente1.nome} tem ${cliente1.idade} anos e é Vip? ${cliente1.vip}`)

/*--------------------------------------------------------------- */
// usando type
type Carro = {
    marca: string,
    modelo: string,
    ano: number;
};

// usando interface
interface Moto {
    marca: string,
    cilindradas: number,
    ano: number
}

//Criando objetos
let carro1: Carro ={
    marca: "Toyota",
    modelo: "Corolla",
    ano: 2022
};

let Moto1: Moto ={
    marca: "Honda",
    cilindradas: 160,
    ano: 2023
};

console.log(`Carro: ${carro1.marca} ${carro1.modelo}, ano ${carro1.ano}`);
console.log(`Moto: ${Moto1.marca}, ${Moto1.cilindradas}cc, ano${Moto1.ano}`);

/*--------------------------------------------------------------- */
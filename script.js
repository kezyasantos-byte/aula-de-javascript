//console.log() mostra uma informçãono console
console.log("Olá,Mundo!")
console.log(2 + "2");

console.log(typeof "Olá, Mundo")//script
console.log(typeof 18);  //number
console.log(typeof 10.5);//number
console.log(typeof true);//boolean
console.log(typeof false);//boolean

//Variavel
//const não pode ter seu valor alterado durante o programa
const nome = "Kezya";
console.log(nome);


// let pode ter seu valor alterado durante o programa
let idade = 17;
console.log(idade)
console.log("Olá" + nome + ",que tem " + idade + "nome");

idade = 18;
console.log(idade);
console.log(`Olá  ${nome} , que tem ${idade} anos.`);


//Variavel 2
const nome2 = "Kauã";
console.log(nome2);

let peso = 85;
console.log(peso)
console.log("Olá" + nome + ",que tem " + peso + "kilos. ");

peso = 86
console.log(peso)

console.log(`Olá ${nome}, que tem   ${peso}kilos`)


//Métodos de script
const texto = "JavaScript"


//conta quantos caracteres a string tem
console.log(texto.length)

//altere todas as letras para maiúscula 
console.log(texto.toUpperCase())

//altere todas as letras para minúcula
console.log(texto.toLowerCase())

const nome_completo = "Kezya Kathellin Máximo Santos"

console.log(nome_completo.includes("Santos")) //true

console.log(10 > 5)//true
console.log(10 < 5)//false
console.log(10 > -10)//true
console.log(10 < -5)//false
console.log("10" == 10)//true
console.log("10" === 10)//false
console.log(10 !== 5)//true
const idadePessoa = 17

console.log(idadePessoa >= 18)//false
console.log(idadePessoa >= 16)//true

//Variavel 3
const sobrenome = "Santos"

const renome = "santos"

console.log("Santos" == "santos")

//coletamos a idade da pessoa 
let pessoaidade = 19
//verificar se  idade é maior que 18
if (pessoaidade >= 18) {
    // se maior ou igual a 18 então é ela maior de idade
    console.log("Já Pode ser preso kkkkkk!")
} else {
    //senão, então ela é menor de idade
    console.log("Não vai pra balada!😂😂😂")
}


// coletamos a idade da pessoa
let idadeVotação = 16
// verificar se a idade da pessoa é maior que 70
if (idadeVotação > 70) {
    console.log(" Você não é obrigada a votar!")
} else if (idadeVotação >= 18) { }
//senão se a idade da pessoa for maior ou igual a 18
//senão se a idade da pessoa for maior ou igual a 16
//senão for nenhuma das alternativas anteriores




let idadeDirigir = 19;
let TemCNH = true;
let TemCarro = false;

if (idadeDirigir => 18 && TemCNH == true && TemCarro == true) {
    console.log("Você Pode dirigir!")
} else {
    console.log("Você Não pode dirigir!")
}


let ehProfessor = false
let ehAluno = false

if (ehProfessor == true || ehAluno == true) {
    console.log("Você tem direito a meia-entrada")
} else {
    console.log("Você não tem direito a meia_entrada ")
}


//&& = e
// ||= ou

//01 — Número dentro do interval ,
// Receba um número e informe se ele está entre 10 e 50, inclusive. Caso contrário, informe que está fora do intervalo.

// Receba um número
let numero = 28;
//  informe se ele está entre 10 e 50
if (numero > 10 && numero < 50) {
    console.log("O numero está no intervalo entre 10 e 50")
} else {
    //Caso contrário, informe que está fora do intervalo.
    console.log("O nuemro está fora o intervalo entre 10 e 50");
}

//02 — Elegibilidade para estágio 
// Uma oportunidade de estágio é destinada a candidatos com idade entre 16 e 24 anos, inclusive. Receba a idade e informe se o candidato atende ao requisito.
let candidato = 20;
if (candidato > 16 && candidatos < 24){
    console.log("O candidato atende aos requisitos entre 16 e 24");
}else{
    console.log("O candidato não atende  aos requistos entre 16 e 24");
}

//Parte 2- 






















//PARTE 1 - DECIÇÃO SIMPLES

//01- Aprovação escolar

let media = 8;

if (media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}

//02- comparação de dois número 
let numero1 = 10;
let numero2 = 5;

if (numero1 = 10 > 5) {
    console.log("O primeiro é maior");
} else if (numero2 = 10 > 5) {
    console.log("O segundo é maior");
} else {
    console.log("Houve empate")
}


//03- verificação da senha 
let senha = prompt("Digite a senha:")

if (senha == "senai123") {
    alert(" acesso autorizado");
} else {
    alert(" Senha incorreta");
}

//Parte 2 - Multiplos caminhos

// 04 - Classificação de temperatura 
const temperatura = 29;

if (temperatura < 18) {
    console.log("frio");
} else if (temperatura <= 27) {
    console.log("Agradáveis");
} else {
    console.log("Quente");
}

//05- classificação de nota 
let nota = 0;
if (nota >= 9) {
    console.log("Excelente")
} else if (nota >= 7) {
    console.log("Bom");
} else if (nota >= 5) {
    console.log("Regular");
} else {
    console.log("Insuficiente");
}

//06- dia da semana 
const semana = 7;
if (semana == 1) {
    console.log(`Domingo`);
} else if (semana == 2) {
    console.log(`Segunda`);
} else if (semana == 3) {
    console.log(`Terça`);
} else if (semana == 4) {
    console.log(`Quarta`);
} else if (semana == 5) {
    console.log(`Quinta`);
} else if (semana == 6) {
    console.log(`Sexta`);
} else if (semana == 7) {
    console.log(`Sabado`);
} else {
    console.log(`Dia inválido`);
}










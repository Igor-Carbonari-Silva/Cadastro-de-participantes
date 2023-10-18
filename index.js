let readlineSync = require('readline-sync');
var nome;
var dataDoEvento;
var idade;
var dataAtual;
var listaParticipantesPalestrantes;

nome = readlineSync.question("Digite seu nome: ");
dataDoEvento = readlineSync.question("Informe a data do evento: ");
idade = readlineSync.question("Digite sua idade: ");
dataAtual = readlineSync.question("Informe a data atual: ");

for (listaParticipantesPalestrantes = 0; listaParticipantesPalestrantes < 100; listaParticipantesPalestrantes++){

    if(dataDoEvento > dataAtual){
        //condição verdadeira
        if(idade > 18){
            //condição verdadeira
            if(listaParticipantesPalestrantes < 100){
                //condição verdadeira
                console.log("Participante cadastro com SUCESSO!!!");
            }else{
                //condição falsa
                console.log("Cadastro negado, lista de participantes excedida!");
            }
        }else{
            //condição falsa
            console.log("Cadastro negado, idade inválida!");
        }
    }else{
        //condição falsa
        console.log("Cadastro não permitido, data inválida!");
    }

    nome = readlineSync.question("Digite seu nome: ");
    dataDoEvento = readlineSync.question("Informe a data do evento: ");
    idade = readlineSync.question("Digite sua idade: ");
    dataAtual = readlineSync.question("Informe a data atual: ");
    
}

console.log("Cadastro negado, lista de participantes excedida!");

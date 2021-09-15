let listaDeEstudantes = ["Giroto", "Lucas", "Eduardo", "Igor"];
let quantidadeDeEstudantes = listaDeEstudantes.length;
if (quantidadeDeEstudantes < 5) {
	listaDeEstudantes.push("Welinton");
	console.log(listaDeEstudantes);
} else {
	console.log("Limite de alunos atingido");
}
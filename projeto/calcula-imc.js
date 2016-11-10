
var trsPacientes = document.getElementsByClassName("paciente");

for (var posicao = 0; posicao <= trsPacientes.length - 1; posicao++) {

	var pacienteTr = trsPacientes[posicao];
	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0].textContent;
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0].textContent;
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0].textContent;

	var paciente = { nome : tdNome, peso : tdPeso, altura : tdAltura}; 

	if (paciente.altura != 0)
	{
		var imc = paciente.peso / (paciente.altura * paciente.altura);

		var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
		tdImc.textContent = imc; 
	}
	else
	{
	    console.log("Não posso executar uma divisão por 0!");
	}
}
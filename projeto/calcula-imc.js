
var tdPeso = document.getElementById("peso-1").textContent;
var tdAltura = document.getElementById("altura-1").textContent;
var nome = document.getElementById("nome-1").textContent;

var paciente = {
				nome   : nome,
				peso   : tdPeso,
				altura : tdAltura
};

if (paciente.altura != 0)
{
	var imc = paciente.peso / (paciente.altura * paciente.altura);
	var tdImc = document.getElementById("imc-1");
	tdImc.textContent = imc; 
}
else
{
    console.log("Não posso executar uma divisão por 0!");
}
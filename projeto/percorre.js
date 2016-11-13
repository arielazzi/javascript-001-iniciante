var trsPacientes = document.getElementsByClassName("paciente");

function percorreArray(trsPacientes, comportamento)
{

	for (var posicao = 0; posicao <= trsPacientes.length - 1; posicao++)
	{
		var pacienteTrAtual = trsPacientes[posicao];
		comportamento(pacienteTrAtual);
	}
}
var trsPacientes = document.getElementsByClassName("paciente");
percorreArray(trsPacientes, function(pacienteTr)
{
	console.log(pacienteTr.getElementsByClassName("info-nome")[0].textContent)
});
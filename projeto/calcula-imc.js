var trsPacientes = document.getElementsByClassName("paciente");



percorreArray(trsPacientes, function(pacienteTr)
{

	var tdNome = pacienteTr.getElementsByClassName("info-nome")[0].textContent;
	var tdPeso = pacienteTr.getElementsByClassName("info-peso")[0].textContent;
	var tdAltura = pacienteTr.getElementsByClassName("info-altura")[0].textContent;

	var paciente = { 
					nome : tdNome, 
					peso : tdPeso, 
					altura : tdAltura,
					pegaImc : function(){
							if (this.altura != 0)
								return this.peso / (this.altura * this.altura);
							else
							    console.log("Não posso executar uma divisão por 0!");
						}
					}; 
	var imc = paciente.pegaImc();
	var tdImc = pacienteTr.getElementsByClassName("info-imc")[0];
	tdImc.textContent = imc; 
});
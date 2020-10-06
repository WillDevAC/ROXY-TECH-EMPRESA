//Inserindo requisição no banco
$('#form1').submit(function(e){
	e.preventDefault();

	var nome = $('#nome').val();
	var email = $('#email').val();
	var mensagem = $('#mensagem').val();

	$.ajax({
		url: 'https://radiocampusapi.com.br/roxytech/email/send',
		type: 'GET',
		dataType: 'json',
		data: {mensagem: 'CLIENTE: '+ nome + ' || EMAIL:  '+ email + ' || PROJETO DETALHADO: ' + mensagem + ''},
		  beforeSend: function() {
		  	$('#falha').text("");
		  	$('#sucesso').text("");
		  	$('#carregando').text("AGUARDE! ENVIANDO SOLICITAÇÃO...");
		},
	})
	.done(function() {
		$('#nome').val("");
		$('#email').val("");
		$('#mensagem').val("");
		$('#carregando').text("");
		$('#sucesso').text("SUCESSO! EM BREVE ENTRAREMOS EM CONTATO.");
	})
	.fail(function() {
		$('#nome').val("");
		$('#email').val("");
		$('#mensagem').val("");
		$('#carregando').text("");
		$('#falha').text("FALHA AO ENVIAR EMAIL!");
	})
	
});




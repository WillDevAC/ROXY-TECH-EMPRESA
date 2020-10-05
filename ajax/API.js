function ola(){
	var nome = $('#nome').val();
	var email = $('#email').val();
	var nome = $('#mensagem').val();

	$.ajax({
			url: 'http://roxytech.com.br/ajax/email.php',
			type: 'post',
			data: {nome: nome, email: email, mensagem: mensagem},
			dataType: 'json',
			success: function (data) {
				$('#nome').val("");
				$('#email').val("");
				$('#mensagem').val("");
				$('#sucesso').val("EMAIL ENVIADO COM SUCESSO!");
			}
		});
}
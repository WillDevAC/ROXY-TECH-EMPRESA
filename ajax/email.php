<?php 

	$nome = $_POST['nome'];
	$email = $_POST['email'];
	$mensagem = $_POST['mensagem'];
	$destinatario = "wydemairomsilva@gmail.com";


	$to = $destinatario;
	$subject = $assunto;
	$message = $mensagem;
	$headers = 'From: $email' . "\r\n" .
	    'Reply-To: $email' . "\r\n" .
	    'X-Mailer: PHP/' . phpversion();
	mail($to, $subject, $message, $headers);
	echo json_encode("Sucesso!");
 ?>
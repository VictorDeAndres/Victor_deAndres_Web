<?php

	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);

	$username = $request->username;
	$mail = $request->mail;
	$subject = $request->subject;
	$message = $request->message;

	if ( $username && $mail && $message){

		$header = "MIME-Version: 1.0" . "\r\n";;
		$header .= "Content-type: text/plain; charset=iso-8859-1" . "\r\n";;
		$header .= "To: Me <victor.deandres@gmail.com>" . "\r\n";
		$header .= "From: " . $username . "<" . $mail .">" . "\r\n";
		$header .= "Reply-To: " . $username . "\r\n";			
		$header .= "Subject: Mensaje desde Victor.deAndres.me" . "\r\n";
		$header .= "X-Mailer: PHP/".phpversion();

		$message = wordwrap($message, 70, "\r\n");

		if ( mail('victor.deandres@gmail.com', 'Mensaje desde Victor.deAndres.me', $message, $header) ){
			$response = array ('status'=>0);
			echo json_encode($response);
		} else {
			$response = array ('status'=>-1, 'message'=>'Mensaje no enviado');
			echo json_encode($response);
		}

	} else {
			$response = array ('status'=>-2, 'message'=>'Parametros incompletos');
			echo json_encode($response);
	}


?>


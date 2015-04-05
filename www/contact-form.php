//<?php
//	//this page will take an ajax request from the contact form and send you an email
//	$myEmail = "connoreggleston@outlook.com";
//	//get the data posted by AJAX
//	$name = $_POST['sender'];
//	$email = $_POST['sender-email'];
//	$sub = $_POST['subject'];
//	$content = $_POST['content'];
//	$message = "Sent by: ".$name."\nEmail: ".$email."\nSubject: ".$sub."\n\n".$content;
//	//send email
//	$headers	= "Content-Type: text/plain; charset=iso-8859-1\n";
//	$headers	.= "From: connoreggleston.com\n";
//	$recipient = $myEmail;
//	$subject	= "Personal Website Contact";
//	$message	= wordwrap($message, 1024);
//	//send email
//	//mail($recipient, $subject, $message, $headers);
//
//	echo $message;
//?>

//<?php
//require_once 'phpmailer/PHPMailerAutoload.php';
//
//if (isset($_POST['inputName']) && isset($_POST['inputEmail']) && isset($_POST['inputSubject']) && isset($_POST['inputMessage'])) {
//
//    //check if any of the inputs are empty
//    if (empty($_POST['inputName']) || empty($_POST['inputEmail']) || empty($_POST['inputSubject']) || empty($_POST['inputMessage'])) {
//        $data = array('success' => false, 'message' => 'Please fill out the form completely.');
//        echo json_encode($data);
//        exit;
//    }
//
//    //create an instance of PHPMailer
//    $mail = new PHPMailer();
//
//    $mail->From = $_POST['inputEmail'];
//    $mail->FromName = $_POST['inputName'];
//    $mail->AddAddress('something@test.com'); //recipient
//    $mail->Subject = $_POST['inputSubject'];
//    $mail->Body = "Name: " . $_POST['inputName'] . "\r\n\r\nMessage: " . stripslashes($_POST['inputMessage']);
//
//    if (isset($_POST['ref'])) {
//        $mail->Body .= "\r\n\r\nRef: " . $_POST['ref'];
//    }
//
//    if(!$mail->send()) {
//        $data = array('success' => false, 'message' => 'Message could not be sent. Mailer Error: ' . $mail->ErrorInfo);
//        echo json_encode($data);
//        exit;
//    }
//
//    $data = array('success' => true, 'message' => 'Thanks! We have received your message.');
//    echo json_encode($data);
//
//} else {
//
//    $data = array('success' => false, 'message' => 'Please fill out the form completely.');
//    echo json_encode($data);
//
//}
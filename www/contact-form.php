<?php 
	//this page will take an ajax request from the contact form and send you an email
	$myEmail = "connoreggleston@outlook.com";

	//get the data posted by AJAX
	$name = $_POST['name'];
	$email = $_POST['email'];
	$sub = $_POST['subject'];
	$content = $_POST['message'];

	$message = "Sent by: ".$name."\nEmail: ".$email."\nSubject: ".$sub."\n\n".$content;

	//send email
	$headers	= "Content-Type: text/plain; charset=iso-8859-1\n";
	$headers	.= "From: connoreggleston.com\n";
	$recipient = $myEmail;
	$subject	= "Personal Website Contact";
	$message	= wordwrap($message, 1024);
	//send email
	mail($recipient, $subject, $message, $headers);

?>
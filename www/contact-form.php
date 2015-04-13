<?php 
//	//this page will take an ajax request from the contact form and send you an email
//	$myEmail = "connoreggleston@outlook.com";
//
//	//get the data posted by AJAX
//	$name = $_POST['sender-name'];
//	$email = $_POST['sender-email'];
//	$subject = $_POST['subject'];
//	$content = $_POST['content'];
//
//	$message = "Sent by: ".$name."\nEmail: ".$email."\nSubject: ".$subject."\n\n".$content;
//
//	//send email
//	$headers	= "Content-Type: text/plain; charset=iso-8859-1\n";
//	$headers	.= "From: connoreggleston.com\n";
//	$recipient = $myEmail;
//	$subject	= "Personal Website Contact";
//	$message	= wordwrap($message, 1024);
//	//send email
//	mail($recipient, $subject, $message, $headers);

//**********NEW STUFF******************//
$errors = array();  // array to hold validation errors
$data = array();        // array to pass back data

//store data in variables
$myEmail = "connoreggleston@outlook.com";
$name = $_POST['sender'];
$senderEmail = $_POST['senderEmail'];
$subject = $_POST['subject'];
$content = $_POST['content'];

// validate the variables ========
if (empty($name))
    $errors['sender'] = 'Name is required.';

if (empty($senderEmail))
    $errors['senderEmail'] = 'Email is required.';

if (empty($subject))
    $errors['subject'] = 'Subject is required.';

if (empty($content))
    $errors['content'] = 'Message is required.';

// return a response ==============

// response if there are errors
if (!empty($errors)) { // if there are items in our errors array, return those errors
    $data['success'] = false;
    $data['errors']  = $errors;
} else { // if there are no errors, return success and send the email
    $data['success'] = true;
    $data['message'] = 'Success!';

    $message = "Sent by: ".$name."\nEmail: ".$senderEmail."\nSubject: ".$subject."\n\n".$content;

    //send email
    $headers	= "Content-Type: text/plain; charset=iso-8859-1\n";
    $headers	.= "From: connoreggleston.com\n";
    $recipient = $myEmail;
    $subject	= "Personal Website Contact";
    $message	= wordwrap($message, 1024);
    //send email
    mail($recipient, $subject, $message, $headers);
}

// return all our data to an AJAX call
echo json_encode($data);

?>
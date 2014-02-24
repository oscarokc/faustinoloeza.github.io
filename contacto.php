<?php
//Importamos las variables del formulario de contacto
@$nombre = addslashes($_POST['nombre']);
@$email = addslashes($_POST['email']);
@$web = addslashes($_POST['web']);
@$mensaje = addslashes($_POST['mensaje']);
 echo "<p>HOLA $nombre</p> ";
//Preparo el mensaje de contacto
$cabeceras = "From: $email\n" //La persona que envia el correo
 . "Reply-To: $email\n";
$asunto = "Mensaje desde la pagina Web"; //asunto aparecera en la bandeja del servidor de correo
$email_to = "fausto_zair@hotmail.com"; //cambiar por tu email
$contenido = "$nombre\n"
. "\n"
. "Nombre: $nombre\n"
. "Email: $email\n"
. "Sitio Web: $web\n"
. "Mensaje: $mensaje\n"
. "\n";
 
//Envio
if (@mail($email_to, $asunto ,$contenido ,$cabeceras )) {
 
//Si el mensaje se envía muestra una confirmación
die("Gracias, su mensaje se envio correctamente.");
}else{
 
//Si el mensaje no se envía muestra el mensaje de error
die("Error: Su información no pudo ser enviada, intente más tarde");
}
?>


			
<?php

//Recibo las variables de formulario

$nombre = $_POST['nombre'];
$mail = $_POST['email'];
$mensaje = $_POST['mensaje'];

//Te muestro las variables

echo "<h3>El mensaje que has enviado es:</h3>";
echo "<br />";
echo "<p>Nombre: ";
echo $nombre;
echo "<br />";
echo "Email: ";
echo $mail;
echo "<br />";
echo "Mensaje: ";
echo $mensaje;
echo "</p>";

//Envio un email
/*
$aquien = "info@jocarsa.com";
$asunto = "Has recibido un correo del Blog";
$mensajemail = $nombre." con el email ".$mail." te ha enviado un mensaje que dice ".$mensaje ;


if(mail($aquien,$asunto,$mensaje)){

echo "Tu email se ha enviado correctamente";

}else{
echo "El envio del mail ha fallado";
}
*/



?>
		
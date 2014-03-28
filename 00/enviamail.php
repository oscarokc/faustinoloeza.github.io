<?php

//Recibo las variables de formulario

$name = $_POST['name'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

//Te muestro las variables

echo "<h3>El mensaje que has enviado es:</h3>";
echo "<br />";
echo "<p>Nombre: ";
echo $name;
echo "<br />";
echo "Email: ";
echo $email;
echo "<br />";
echo "Mensaje: ";
echo $mensaje;
echo "</p>";

//Envio un email

$aquien = "fausto_zair@hotmail.com";
$asunto = "Has recibido un correo de BESTBUS";
$mensajemail = $name." con el email ".$email." te ha enviado un mensaje que dice ".$mensaje ;


if(mail($aquien,$asunto,$mensaje)){

echo "Tu email se ha enviado correctamente";

}else{
echo "El envio del mail ha fallado";
}
?>
		
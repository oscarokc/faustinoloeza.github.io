<?php

$nombre[]="Faustino";
$nombre[]="Veder";
$nombre[]="Ivan";
$nombre[]="Fernando";
$nombre[]="Francisco";
$nombre[]="Aida";
$nombre[]="Bernardo";
$nombre[]="Toreto";
$q=$_GET["q"];

if (strlen($q) > 0)
  {
  $hint="";
  for($i=0; $i<count($nombre); $i++)
    {
    if (strtolower($q)==strtolower(substr($nombre[$i],0,strlen($q))))
      {
      if ($hint=="")
        {
        $hint=$nombre[$i];
        }
      else
        {
        $hint=$hint." , ".$nombre[$i];
        }
      }
    }
  } else{$hint = "";}

if ($hint == "")
  {
  $response="No hay coincidencias";
  //$response=$hint;
  }
else
  {
  $response=$hint;
  }

echo $response;

?>

<?php
include('conexion.php');

 $postdata = file_get_contents("php://input");
    $request = json_decode($postdata);
    $nombre = $request->nombre;
    $signo = $request->signo;
    $fecha = $request->fecha;
    $numero = $request->numero;
    $numero_dos= $request->numero_dos;
    $con = conexion();

if ($con->conect_error) {
    die("conection failed: " . $con->conect_error);
} 

$sql = "INSERT INTO `jugada_pale` (
`id`, 
`nombre`, 
`signo`, 
`fecha_nacimiento`, 
`numero_uno`, 
`numero_dos`, 
`fecha`
) VALUES (NULL, '$nombre', '$signo', '$fecha', '$numero', '$numero_dos', NOW());";

if ($con->query($sql) === TRUE) {
    echo "New record created successfully";
  
} else {
    echo "Error: " . $sql . "<br>" . $con->error;
}

$con->close();
?>
<?php
    $conn = mysqli_connect('localhost', 'root', '', 'avvpetea');

    $nominativo = $_POST['nominativo'];
    $email = $_POST['email'];
    $messaggio = $_POST['messaggio'];

    $query = "INSERT INTO form_contatti(nominativo,email,messaggio) VALUE ('$nominativo', '$email', '$messaggio')";

    $result = mysqli_query($conn, $query);

    header("location: contatti.html");

?>
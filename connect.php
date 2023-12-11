<?php
    $person = $_POST['person'];
    $mail = $_POST['mail'];
    $mess = $_POST['mess'];

    //Database connection
    $conn= new mysqli ('localhost','root','','data');
    if ($conn->connect_error) {
        die('Connection Failed : ' .$conn->connect_error);   
    } else {
        $stmt = $conn->prepare("insert into response(person, mail, mess) values(?, ?, ?)");
        $stmt->bind_param("sss", $person, $mail, $mess);
        $stmt->execute();
        echo "Thank you for your submission!";
        $stmt->close();
        $conn->close();
    }
?>

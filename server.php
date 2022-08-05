<?php 
    session_start();
    $name = "";
    $email = "";
    $message = "";
    $time = "";
    $errors = "";

    $db = mysqli_connect("localhost", "root", "", "contact");


    if(isset($_POST['register'])) {
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $time = $_POST['time'];


        $sql = "INSERT INTO contact (`name`, `email`, `message`, `time`)
                VALUES ( '$name', '$email', '$message', '$time')";
                mysqli_query($db, $sql);

        $_SESSION['name'] = $name;
        $_SESSION['success'] = "Thanks for your message. We'll reach out to you soon...";
        header('location: /corpus/index1.php#What-I-Do');

    }
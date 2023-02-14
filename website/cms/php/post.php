<?php
session_start();
require __DIR__ . '/../../vendor/autoload.php';

//connect to mongodb client
$client = new MongoDB\Client;

//select ecommerce database
$db = $client->ecomerce;

$info = isset($_POST['info']) ? filter_var($_POST['info'], FILTER_SANITIZE_STRING) : '';


    $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
    $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

    $findExistingEmail = [
        'Email' => $email
    ];

    $collection = $db->users;
    $resultArray = $collection->find($findExistingEmail)->toArray();
    if (count($resultArray) == 0) {
        echo "Email does not exist";
    } else {
        if ($resultArray[0]['Password'] == $password) {
            if ($resultArray[0]['Category'] == 'admin'){
                echo "Login Successful";
                $_SESSION['loggedIn'] = $resultArray[0]["_id"];
            }
            else{
            echo "Unauthorized";}
        } else {
            echo "Incorrect Password";
        }
    }

?>

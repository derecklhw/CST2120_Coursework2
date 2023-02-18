<?php
session_start();
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

//connect to mongodb client
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->users;

// if info is set, then it is a new user
$info = isset($_POST['info']) ? filter_var($_POST['info'], FILTER_SANITIZE_STRING) : '';
// filter the data
$email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
$password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

// set email to find
$findExistingEmail = [
    'Email' => $email
    ];

// receive the date from users email
$resultArray = $collection->find($findExistingEmail)->toArray();
// check if email exists
if (count($resultArray) == 0) {
    echo "Email does not exist";
} else {
    // check if password is correct
    if ($resultArray[0]['Password'] == $password) {
        // check if user is admin
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

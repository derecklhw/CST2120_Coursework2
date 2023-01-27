<?php
require __DIR__ . '/../vendor/autoload.php';
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->users;
$data = [
    'Name' => 'Damien',
    'Surname' => 'Maujean',
    'Email' => 'damienmaujean@gmail.com',
    'Password' => '123456',
    'Phone' => '123456789',
    'Address' => '123456789',
    'Category' => 'admin'
];
$Result = $collection->insertOne($data);
if ($Result->getInsertedCount() > 0) {
    echo "Data Inserted";
    echo ' New document id: ' . $Result->getInsertedId();
} else {
    echo "Data Not Inserted";
}

// $cursor = $collection->find();



// foreach ($cursor as $document) {
//     echo $document["Name"] . "

// ";
// }
?>
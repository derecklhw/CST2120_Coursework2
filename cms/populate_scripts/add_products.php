<?php

require __DIR__ . '/../../vendor/autoload.php';
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;
$data = [
    'Name' => 'Fresh Orange',
    'Price' => 150,
    'Stock_Available' => 50,
    'season' => 'Summer',
    'category' => 'citrus',
    'image_link' => 'assets/images/fruits/orange.jpg'

];
$Result = $collection->insertOne($data);
if ($Result->getInsertedCount() > 0) {
    echo "Data Inserted";
    echo ' New product id: ' . $Result->getInsertedId();
} else {
    echo "Data Not Inserted";
}

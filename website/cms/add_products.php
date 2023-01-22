<?php

require __DIR__ . '\vendor\autoload.php';
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;
$data = [
    'Name' => 'Orange',
    'Price' => 15,
    'Stock_Available' => 50,
    'season' => 'summer',
    'category' => 'fruit',
    'image_link' => 'link to fill later'

];
$Result = $collection->insertOne($data);
if ($Result->getInsertedCount() > 0) {
    echo "Data Inserted";
    echo ' New product id: ' . $Result->getInsertedId();
} else {
    echo "Data Not Inserted";
}

?>
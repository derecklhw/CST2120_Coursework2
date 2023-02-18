<?php
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

// Connect to MongoDB and select database
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->orders;
// Receive data from the request
$cursor = $collection->find();
// Return data as JSON
$data = array();
foreach ($cursor as $document) {
    $data[] = $document;
}
echo json_encode($data);
?>
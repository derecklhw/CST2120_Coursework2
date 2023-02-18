<?php
require __DIR__ . '/../../vendor/autoload.php';


$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->orders;
$cursor = $collection->find();
$data = array();
foreach ($cursor as $document) {
    $data[] = $document;
}
echo json_encode($data);

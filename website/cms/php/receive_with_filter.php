<?php
require __DIR__ . '/../vendor/autoload.php';

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$filter = array();

foreach($data as $key => $value) {
    $filter[$key] = $value;
}

$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;
$cursor = $collection->find($filter);
$received_data = array();
foreach ($cursor as $document) {
    array_push($received_data, $document);
}
echo json_encode($received_data);

?>
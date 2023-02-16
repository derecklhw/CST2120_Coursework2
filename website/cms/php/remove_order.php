<?php
require __DIR__ . '/../../vendor/autoload.php';

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$input = filter_var($data["order_id"], FILTER_SANITIZE_STRING);

$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->orders;

// delete product
$deleteOneResult = $collection->deleteOne(
    ['_id' => new MongoDB\BSON\ObjectId($input)]
);
echo json_encode(["_id" => (string)$deleteOneResult->getDeletedCount()]);




?>
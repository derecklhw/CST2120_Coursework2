<?php
require __DIR__ . '/../../vendor/autoload.php';

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$selected_option = $data["selected_option"];

$input = filter_var($data["input"], FILTER_SANITIZE_STRING);

$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;

// delete product
if ($selected_option == 2) {
    $deleteOneResult = $collection->deleteOne(
        ['_id' => new MongoDB\BSON\ObjectId($input)]
    );
    echo json_encode(["_id" => (string)$deleteOneResult->getDeletedCount()]);
} else if ($selected_option == 3) {
    $deleteOneResult = $collection->deleteOne(
        ['Name' => $input]
    );
    echo json_encode(["_id" => (string)$deleteOneResult->getDeletedCount()]);
}

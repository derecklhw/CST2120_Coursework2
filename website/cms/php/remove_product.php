<?php
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

// set the header to json
header("Content-Type: application/json");
// get the data from the request
$data = json_decode(file_get_contents('php://input'), true);

// get the selected option
$selected_option = $data["selected_option"];
// filter the data
$input = filter_var($data["input"], FILTER_SANITIZE_STRING);

// Connect to MongoDB and select database
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;

// Delete data from the request base on id or name and return number of deleted documents
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

<?php
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

// set the header to json
header("Content-Type: application/json");
// get the data from the request
$data = json_decode(file_get_contents('php://input'), true);

// filter the data
$input = filter_var($data["order_id"], FILTER_SANITIZE_STRING);
// Connect to MongoDB and select database
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->orders;

// Delete data from the request
$deleteOneResult = $collection->deleteOne(
    ['_id' => new MongoDB\BSON\ObjectId($input)]
);
// Return number of deleted documents
echo json_encode(["_id" => (string)$deleteOneResult->getDeletedCount()]);

?>

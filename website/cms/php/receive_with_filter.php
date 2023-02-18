<?php
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

// set the header to json
header("Content-Type: application/json");
// get the data from the request
$data = json_decode(file_get_contents('php://input'), true);

$filter = array();

// loop through the data and filter the data
foreach ($data as $key => $value) {
    // set the table name
    if ($key == "table") {
        $table = $value;
        // find id and convert it to object id
    } else if (($key == "_id") || ($key == "client_id")) {
        $id = filter_var($value, FILTER_SANITIZE_STRING);
        $filter[$key] = new MongoDB\BSON\ObjectId($id);
        // find the price and stock and convert it to int
    } else if (($key == "Stock_Available") || ($key == "total_price")) {
        $input_data = filter_var($value, FILTER_SANITIZE_NUMBER_INT);
        $filter[$key] = (int) $input_data;
        // Set string to other data
    } else {
        $input_data = filter_var($value, FILTER_SANITIZE_STRING);
        $filter[$key] = $input_data;
    }
}

// Connect to MongoDB and select database
$client = new MongoDB\Client;
$db = $client->ecomerce;
// Select the collection
if ($table == "products") {
    $collection = $db->products;
} else if ($table == "orders") {
    $collection = $db->orders;
}
// Receive data from the request
$cursor = $collection->find($filter);
// Return data as JSON
$received_data = array();
foreach ($cursor as $document) {
    array_push($received_data, $document);
}
echo json_encode($received_data);

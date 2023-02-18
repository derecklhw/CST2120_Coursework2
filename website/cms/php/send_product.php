<?php
// Include Composer autoloader if not already done.
require __DIR__ . '/../../vendor/autoload.php';

// set the header to json
header("Content-Type: application/json");
// get the data from the request
$data = json_decode(file_get_contents('php://input'), true);

// filter the data and set the data type
$name = filter_var($data["name"], FILTER_SANITIZE_STRING);
$price = (int) filter_var($data["price"], FILTER_SANITIZE_NUMBER_INT);
$stock = (int) filter_var($data["stock"], FILTER_SANITIZE_NUMBER_INT);
$season = filter_var($data["season"], FILTER_SANITIZE_STRING);
$category = filter_var($data["category"], FILTER_SANITIZE_STRING);
$image = filter_var($data["image"], FILTER_SANITIZE_STRING);


// connect to the MongoDB server
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;

// Insert the new product
$insertOneResult = $collection->insertOne([
    'Name' => $name,
    'Price' => $price,
    'Stock_Available' => $stock,
    'Season' => $season,
    'Category' => $category,
    'Image_link' => $image
]);

// Return the id of the new product
echo json_encode(["_id" => (string)$insertOneResult->getInsertedId()]);

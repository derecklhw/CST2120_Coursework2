<?php
// Path: website\cms\php\send_product.php
require __DIR__ . '/../../vendor/autoload.php';
header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$name = filter_var($data["name"], FILTER_SANITIZE_STRING);
$price = (int) filter_var($data["price"], FILTER_SANITIZE_NUMBER_INT);
$stock = (int) filter_var($data["stock"], FILTER_SANITIZE_NUMBER_INT);
$season = filter_var($data["season"], FILTER_SANITIZE_STRING);
$category = filter_var($data["category"], FILTER_SANITIZE_STRING);
$image = filter_var($data["image"], FILTER_SANITIZE_STRING);


// connect to the MongoDB server
$client = new MongoDB\Client;

// Select the ecommerce database
$db = $client->ecomerce;

// Select the products collection
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

// Print the _id of the new product
echo json_encode(["_id" => (string)$insertOneResult->getInsertedId()]);
?>

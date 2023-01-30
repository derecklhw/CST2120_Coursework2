<?php
// Path: website\cms\php\send_product.php
require __DIR__ . '/../vendor/autoload.php';
header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$price = $data["price"];
$stock = $data["stock"];
$season = $data["season"];
$category = $data["category"];
$image = $data["image"];

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

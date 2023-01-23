<?php
require __DIR__ . '\vendor\autoload.php';

$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$price = $data["price"];
$season = $data["season"];
$nb_available = $data["nb_available"];
$category = $data["category"];
$image_link = $data["image_link"];

$data_to_send = [
    'Name' => $name,
    'Price' => $price,
    'Stock_Available' => $nb_available,
    'season' => $season,
    'category' => $category,
    'image_link' => $image_link
];

$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;
$result = $collection->insertOne($data_to_send);
if ($result->getInsertedCount() > 0) {
    echo "Data Inserted";
    echo ' New document id: ' . $result->getInsertedId();
} else {
    echo "Data Not Inserted";
}

?>
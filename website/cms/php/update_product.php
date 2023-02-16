<?php   
require __DIR__ . '/../../vendor/autoload.php';

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

$_id = filter_var($data["_id"], FILTER_SANITIZE_STRING);
$name = filter_var($data["name"], FILTER_SANITIZE_STRING);
$price = (int) filter_var($data["price"], FILTER_SANITIZE_NUMBER_INT);
$stock = (int) filter_var($data["stock"], FILTER_SANITIZE_NUMBER_INT);
$season = filter_var($data["season"], FILTER_SANITIZE_STRING);
$category = filter_var($data["category"], FILTER_SANITIZE_STRING);
$image = filter_var($data["image"], FILTER_SANITIZE_STRING);

$data_modify = [
    "Name" => $name,
    "Price" => $price,
    "Season" => $season,
    "Stock_Available" => $stock,
    "Category" => $category,
    "Image_link" => $image
];

$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;

$updateOneResult = $collection->updateOne(
    ['_id' => new MongoDB\BSON\ObjectId($_id)],
    ['$set' => $data_modify]
);

echo $updateOneResult->getModifiedCount();

// if ($updateOneResult->getModifiedCount() > 0) {
//     echo "Product updated successfully.";
// } else {
//     echo "Product not found or no changes were made.";
// }



?>
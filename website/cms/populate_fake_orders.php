<?php
require __DIR__ . '/../vendor/autoload.php';

$order_data = [
    [
        "client_id" => new MongoDB\BSON\ObjectId("5f0f711b1e02e30c82396f48"),
        "orders_product" => [
            [new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068323"), 1],
            [new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068324"), 6]
        ],
        "total_price" => 1000,
        "address" => "Rua 1, 123",
        "date" => new MongoDB\BSON\UTCDateTime(time()*1000)
    ],
    [
        "client_id" => new MongoDB\BSON\ObjectId("5f0f711b1e02e30c82396f48"),
        "orders_product" => [
            [new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068323"), 100],
            [new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068324"), 30]
        ],
        "total_price" => 1000,
        "address" => "Rua 1, 123",
        "date" => new MongoDB\BSON\UTCDateTime(time()*1000)
    ]
];


$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->orders;
$Result = $collection->insertMany($order_data);
if ($Result->getInsertedCount() > 0) {
    echo "Data Inserted";
    // print each id of inserted document
    foreach ($Result->getInsertedIds() as $id) {
        echo $id;
    }
} else {
    echo "Data Not Inserted";
}


?>
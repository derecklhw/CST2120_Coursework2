<?php
require __DIR__ . '/../../vendor/autoload.php';

$order_data = [
    [
        "client_id" => new MongoDB\BSON\ObjectId("5f0f711b1e02e30c82396f48"),
        "orders_product" => [
            [
                "id" => new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068323"),
                "name" => "Fresh Watermelon",
                "price" => 40,
                "season" => "Summer",
                "category" => "melons",
                "image_link" => "assets/images/fruits/watermelon.jpg",
                "quantity" => 1
            ],
            [
                "id" => new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068324"),
                "name" => "Fresh Pomogranate",
                "price" => 60,
                "season" => "Summer",
                "category" => "tropical and exotic",
                "image_link" => "assets/images/fruits/pomegranate.jpg",
                "quantity" => 6
            ]
        ],
        "total_price" => 345,
        "address" => "Rua 1, 123",
        "date" => new MongoDB\BSON\UTCDateTime(time() * 1000)
    ],
    [
        "client_id" => new MongoDB\BSON\ObjectId("5f0f711b1e02e30c82396f48"),
        "orders_product" => [
            [
                "id" => new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068323"),
                "name" => "Fresh Grapes",
                "price" => 50,
                "season" => "Summer",
                "category" => "berries",
                "image_link" => "assets/images/fruits/grape.jpg",
                "quantity" => 150
            ],
            [
                "id" => new MongoDB\BSON\ObjectId("63ce1b92e5f02961a3068324"),
                "name" => "Fresh Cherry",
                "price" => 50,
                "season" => "Summer",
                "category" => "berries",
                "image_link" => "assets/images/fruits/cherry.jpg",
                "quantity" => 30
            ]
        ],
        "total_price" => 230,
        "address" => "Rua 1, 123",
        "date" => new MongoDB\BSON\UTCDateTime(time() * 1000)
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

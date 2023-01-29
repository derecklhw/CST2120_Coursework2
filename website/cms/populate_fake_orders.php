<?php
require __DIR__ . '/vendor/autoload.php';

$order_data = [
    [
        "client_id" => "63d63a484rrr00505adf34d0",
        "orders_product" => [
            ["63d63a484af200505adf3ppp", 1],
            ["63345a484af200505adf3ppp", 6]
        ],
        "total_price" => 1000,
        "date" => date("Y-m-d")
    ],
    [
        "client_id" => "63d63a484rrr00505adf34d0",
        "orders_product" => [
            ["63d63a484af200505adf3ppp", 100],
            ["63345a484af200505adf3ppp", 30]
        ],
        "total_price" => 1000,
        "date" => date("Y-m-d")
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
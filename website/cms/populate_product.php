<?php
require __DIR__ . '/../vendor/autoload.php';
$product_data = [
    [
        "Name" => "Fresh Apple",
        "Price" => 160,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/apple.jpg"
    ],
    [
        "Name" => "Fresh Orange",
        "Price" => 150,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/orange.jpg"
    ],
    [
        "Name" => "Fresh Grapes",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/grapes.jpg"
    ],
    [
        "Name" => "Fresh Blueberry",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/blueberry.jpg"
    ],
    [
        "Name" => "Fresh Cherry",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/cherry.jpg"
    ],
    [
        "Name" => "Fresh Date",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/date.jpg"
    ],
    [
        "Name" => "Fresh Kiwi",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/kiwi.jpg"
    ],
    [
        "Name" => "Fresh Lemon",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/lemon.jpg"
    ],
    [
        "Name" => "Fresh Local Orange",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/local-orange.jpg"
    ],
    [
        "Name" => "Fresh Mango",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/mango.jpg"
    ],
    [
        "Name" => "Fresh Green Orange",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/orange-green.jpg"
    ],
    [
        "Name" => "Fresh Peach",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/peach.jpg"
    ],
    [
        "Name" => "Fresh Pineapple",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/pineapple.jpg"
    ],
    [
        "Name" => "Fresh Strawberry",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/strawberry.jpg"
    ],
    [
        "Name" => "Fresh Watermelon",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/watermelon.jpg"
    ],
    [
        "Name" => "Fresh Pomogranate",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/pomegranate.jpg"
    ],
    [
        "Name" => "Fresh Pulm",
        "Price" => 200,
        "Stock_Available" => 100,
        "Season" => "Summer",
        "Category" => "Fruits",
        "Image_link" => "assets/images/fruits/pulm.jpg"
    ]
];
// send these data to database
$client = new MongoDB\Client;
$db = $client->ecomerce;
$collection = $db->products;
$Result = $collection->insertMany($product_data);
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
<?php
include 'db.php';

$info = filter_input(INPUT_GET, 'info', FILTER_SANITIZE_STRING);

switch ($info) {
    case 'getProductDetails':
        $productId = filter_input(INPUT_GET, 'productId', FILTER_SANITIZE_STRING);
        $collection = $db->products;
        $findCriteria = [
            "_id" => new MongoDB\BSON\ObjectId($productId)
        ];
        $cursor = $collection->findOne($findCriteria);
        echo json_encode($cursor);
        break;
}

function getProductStockAvailable(object $db, string $id)
{
    $collection = $db->products;
    $cursor = $collection->findOne(['_id' => new MongoDB\BSON\ObjectId($id)]);
    echo $cursor['Stock_Available'];
}

function getProductArray(object $db)
{
    $collection = $db->products;
    $cursor = $collection->find();
    foreach ($cursor as $document) {
        $data[] = $document;
    }
    return $data;
}

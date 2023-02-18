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
    case 'logout':
        session_start();
        session_unset();
        session_destroy();
        echo "Logged Out";
        break;
    case 'getAccountName':
        session_start();
        if (isset($_SESSION['loggedIn'])) {
            $collection = $db->users;
            $findCriteria = [
                "_id" => new MongoDB\BSON\ObjectId($_SESSION['loggedIn'])
            ];
            $cursor = $collection->findOne($findCriteria);
            echo "<p>" . $cursor['Name'] . " " . $cursor['Surname'] . "</p>";
        }
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

function getProductArrayWithSearchCriteria(object $db, array $search_criteria)
{
    $collection = $db->products;
    $cursor = $collection->find($search_criteria);
    foreach ($cursor as $document) {
        $data[] = $document;
    }
    return $data;
}

function getPastOrders(object $db, string $customerId)
{
    $collection = $db->orders;
    $cursor = $collection->find(['client_id' => new MongoDB\BSON\ObjectId($customerId)]);
    foreach ($cursor as $document) {
        $data[] = $document;
    }
    return $data;
}

function getUserDetails(object $db, string $customerId)
{
    $collection = $db->users;
    $cursor = $collection->findOne(['_id' => new MongoDB\BSON\ObjectId($customerId)]);
    return $cursor;
}

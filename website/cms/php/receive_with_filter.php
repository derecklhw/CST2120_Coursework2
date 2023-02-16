<?php
require __DIR__ . '/../../vendor/autoload.php';

header("Content-Type: application/json");
$data = json_decode(file_get_contents('php://input'), true);

//generate a json
// $data = array("table" => 'products', "Stock_Available" => 100);


$filter = array();

foreach($data as $key => $value) {
    if($key == "table"){
        $table = $value;
    }else if(($key == "_id") || ($key == "client_id")){
        // echo $value;
        $id = filter_var($value, FILTER_SANITIZE_STRING);
        // echo $id;
        $filter[$key] = new MongoDB\BSON\ObjectId($id);
        // echo $filter[$key];
    }else if(($key == "Stock_Available") || ($key == "total_price")){
        $input_data = filter_var( $value, FILTER_SANITIZE_NUMBER_INT);
        // echo $input_data;
        $filter[$key] = (int) $input_data;
        // echo $filter[$key];
    }else{
        $input_data = filter_var( $value, FILTER_SANITIZE_STRING);
        $filter[$key] = $input_data;
    }
}
//echo the filter;
// echo json_encode($filter);

$client = new MongoDB\Client;
$db = $client->ecomerce;
if ($table == "products") {
    $collection = $db->products;
} else if ($table == "orders") {
    $collection = $db->orders;
}
$cursor = $collection->find($filter);

$received_data = array();
foreach ($cursor as $document) {
    array_push($received_data, $document);
}
echo json_encode($received_data);

?>
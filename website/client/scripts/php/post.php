<?php
include 'db.php';

$post = isset($_POST['post']) ? filter_var($_POST['post'], FILTER_SANITIZE_STRING) : '';

switch ($post) {
    case ("recordOrder"):
        $userId = isset($_POST['userId']) ? filter_var($_POST['userId'], FILTER_SANITIZE_STRING) : '';
        $unfilteredCart = isset($_POST['cart']) ? json_decode($_POST['cart'], true) : array();
        $filteredCart = array();
        foreach ($unfilteredCart as $item) {
            $filteredCart[] = array(
                'id' => filter_var($item['id'], FILTER_SANITIZE_STRING),
                'name' => filter_var($item['name'], FILTER_SANITIZE_STRING),
                'price' => filter_var($item['price'], FILTER_SANITIZE_NUMBER_INT),
                'season' => filter_var($item['season'], FILTER_SANITIZE_STRING),
                'category' => filter_var($item['category'], FILTER_SANITIZE_STRING),
                'image_link' => filter_var($item['image_link'], FILTER_SANITIZE_URL),
                'quantity' => filter_var($item['quantity'], FILTER_SANITIZE_NUMBER_INT),
            );
        }
        $order_data = [
            "client_id" => new MongoDB\BSON\ObjectId($userId),
            "orders_product" => $filteredCart,
            "total_price" => 12000,
            "address" => "Tamarin",
            "date" => new MongoDB\BSON\UTCDateTime(time() * 1000)
        ];
        $collection = $db->orders;
        $Result = $collection->insertOne($order_data);
        if ($Result->getInsertedCount() > 0) {
            echo "Data Inserted";
            // print each id of inserted document
            // foreach ($Result->getInsertedIds() as $id) {
            //     echo $id;
            // }
            var_dump($Result->getInsertedIds);
        } else {
            echo "Data Not Inserted";
        }
        break;
}

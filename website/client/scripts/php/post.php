<?php
session_start();
include 'db.php';

// sanitize the post parameters
$info = isset($_POST['info']) ? filter_var($_POST['info'], FILTER_SANITIZE_STRING) : '';

// switch statement to handle the different post requests
switch ($info) {
    case ("recordOrder"):
        $userId = $_SESSION['loggedIn'];
        // sanitize the other post parameters
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
        $total = 0;
        // calculate the total price of all checkout items
        foreach ($unfilteredCart as $item) {
            $total += $item['price'] * $item['quantity'];
        }

        // retrieve the address of the user
        $address = getCustomerAddress($db, $userId);

        $order_data = [
            "client_id" => new MongoDB\BSON\ObjectId($userId),
            "orders_product" => $filteredCart,
            "total_price" => $total * 1.15,
            "address" => $address,
            "date" => new MongoDB\BSON\UTCDateTime(time() * 1000)
        ];

        // insert the new order record in the orders collection
        $collection = $db->orders;
        $Result = $collection->insertOne($order_data);
        if ($Result->getInsertedCount() > 0) {
            echo "Data Inserted";
            updateProductDb($db, $filteredCart);
        } else {
            echo "Data Not Inserted";
        }
        break;
    case ("recordUser"):
        // sanitize the other post parameters
        $firstName = filter_var($_POST['firstName'], FILTER_SANITIZE_STRING);
        $lastName = filter_var($_POST['lastName'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

        $findExistingEmail = [
            'Email' => $email
        ];

        // search if email used is already registered
        $collection = $db->users;
        $resultArray = $collection->find($findExistingEmail)->toArray();

        if (count($resultArray) == 0) {
            $user_details = [
                'Name' => $firstName,
                'Surname' => $lastName,
                'Email' => $email,
                'Password' => $password,
                'Phone' => '',
                'Address' => '',
                'Category' => 'customer'
            ];

            // record the new user
            $Result = $collection->insertOne($user_details);
            if ($Result->getInsertedCount() > 0) {
                echo "Data Inserted";
            } else {
                echo "Data Not Inserted";
            }
        } else if (count($resultArray) > 1) {
            echo "Email already exists";
        }

        break;
    case ("login"):
        // sanitize the other post parameters
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $password = filter_var($_POST['password'], FILTER_SANITIZE_STRING);

        $findExistingEmail = [
            'Email' => $email
        ];

        // search if email used is already registered
        $collection = $db->users;
        $resultArray = $collection->find($findExistingEmail)->toArray();
        if (count($resultArray) == 0) {
            echo "Email does not exist";
        } else {
            if ($resultArray[0]['Password'] == $password) {
                echo "Login Successful";
                $_SESSION['loggedIn'] = $resultArray[0]["_id"];
            } else {
                echo "Incorrect Password";
            }
        }
        break;
    case ("editAccountDetails"):
        $userId = $_SESSION['loggedIn'];
        // sanitize the other post parameters
        $name = filter_var($_POST['name'], FILTER_SANITIZE_STRING);
        $surname = filter_var($_POST['surname'], FILTER_SANITIZE_STRING);
        $email = filter_var($_POST['email'], FILTER_SANITIZE_STRING);
        $phone = filter_var($_POST['phone'], FILTER_SANITIZE_STRING);
        $address = filter_var($_POST['address'], FILTER_SANITIZE_STRING);

        $collection = $db->users;
        $Result = $collection->updateOne(
            ['_id' => new MongoDB\BSON\ObjectId($userId)],
            ['$set' => ['Name' => $name, 'Surname' => $surname, 'Email' => $email, 'Phone' => $phone, 'Address' => $address]]
        );
        if ($Result->getModifiedCount() > 0) {
            echo "Data Updated";
        } else {
            echo "Data Not Updated";
        }
        break;
}

// retrieve login account current address
function getCustomerAddress(object $db, string $customerId)
{
    $collection = $db->users;
    $cursor = $collection->findOne(['_id' => new MongoDB\BSON\ObjectId($customerId)]);
    return $cursor['Address'];
}

// update the product database after checkout
function updateProductDb(object $db, array $cart)
{
    $collection = $db->products;
    foreach ($cart as $item) {
        $cursor = $collection->findOne(['_id' => new MongoDB\BSON\ObjectId($item['id'])]);
        $newQuantity = $cursor['Stock_Available'] - $item['quantity'];
        $collection->updateOne(
            ['_id' => new MongoDB\BSON\ObjectId($item['id'])],
            ['$set' => ['Stock_Available' => $newQuantity]]
        );
    }
}

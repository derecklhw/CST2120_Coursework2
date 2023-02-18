<?php
require __DIR__ . '/../../../vendor/autoload.php';

//connect to mongodb client
$client = new MongoDB\Client('mongodb+srv://derecklhw:test123@cluster0.ydhzu88.mongodb.net/?retryWrites=true&w=majority');

//select ecommerce database
$db = $client->ecomerce;

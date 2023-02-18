<?php
require __DIR__ . '/../../../vendor/autoload.php';

//connect to mongodb client
$client = new MongoDB\Client;

//select ecommerce database
$db = $client->ecomerce;

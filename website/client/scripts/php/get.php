<?php
include "db.php";

$mode = filter_input(INPUT_GET, 'mode', FILTER_SANITIZE_STRING);

switch ($mode) {
    case 'build_catalogue':
        $format = filter_input(INPUT_GET, 'format', FILTER_SANITIZE_STRING);
        $data = array();
        switch ($format) {
            case 'default':
                $data = getProductArray($db);
                buildCatalogue($data);
                break;
            case 'descending':
                $data = getProductArray($db);
                usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
                buildCatalogue($data);
                break;
            case 'ascending':
                $data = getProductArray($db);
                usort($data, fn ($a, $b) => $b['Name'] <=> $a['Name']);
                buildCatalogue($data);
                break;
            case 'search':
                // > db.products.createIndex({Name:"text"})
                $search_string = filter_input(INPUT_GET, 'search_parameter', FILTER_SANITIZE_STRING);
                if ($search_string == "") {
                    $data = getProductArray($db);
                } else {
                    $search_criteria = [
                        '$text' => ['$search' => $search_string]
                    ];
                    $collection = $db->products;
                    $cursor = $collection->find($search_criteria);
                    foreach ($cursor as $document) {
                        $data[] = $document;
                    }
                }
                buildCatalogue($data);
                break;
        }
        break;
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

function buildCatalogue(array $data)
{
    foreach ($data as $product_details) { ?>
        <div class="product-wrap">
            <div class="product-img">
                <img src="<?= $product_details['Image_link'] ?>" alt="<?= $product_details['Image_link'] ?>" />
            </div>
            <div class="product-description">
                <p class="product-name"><?= $product_details['Name'] ?></p>
                <p class="product-price">
                    <strong>Price:</strong>
                    <span class="price"><?= $product_details['Price'] ?></span>$/kg
                </p>
                <div class="add-to-cart-btn">
                    <p><span class="icon-cart-plus"></span>Add to cart</p>
                </div>
            </div>
        </div><?php }
        }
                ?>
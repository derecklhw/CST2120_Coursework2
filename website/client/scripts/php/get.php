<?php
include "db.php";

$mode = filter_input(INPUT_GET, 'mode', FILTER_SANITIZE_STRING);

switch ($mode) {
    case 'default':
        $collection = $db->products;
        $cursor = $collection->find();
        $data = array();
        foreach ($cursor as $document) {
            $data[] = $document;
        }
        buildCatalogue($data);
        break;
    case 'descending':
        $collection = $db->products;
        $cursor = $collection->find();
        $data = array();
        foreach ($cursor as $document) {
            $data[] = $document;
        }
        usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
        buildCatalogue($data);
        break;
    case 'ascending':
        $collection = $db->products;
        $cursor = $collection->find();
        $data = array();
        foreach ($cursor as $document) {
            $data[] = $document;
        }
        usort($data, fn ($a, $b) => $b['Name'] <=> $a['Name']);
        buildCatalogue($data);
        break;
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
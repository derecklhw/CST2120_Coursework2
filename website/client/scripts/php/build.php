<?php
include "db.php";

$build = filter_input(INPUT_POST, 'build', FILTER_SANITIZE_STRING);

switch ($build) {
    case 'catalogue':
        $mode = filter_input(INPUT_POST, 'mode', FILTER_SANITIZE_STRING);
        $sortType = filter_input(INPUT_POST, 'format', FILTER_SANITIZE_STRING);
        $search_string = filter_input(INPUT_POST, 'search_parameter', FILTER_SANITIZE_STRING);

        $cart = json_decode($_POST['cart'], true);
        $filteredCart = array();
        foreach ($cart as $unfilteredItem) {
            $filteredCart[] = [
                'id' => $unfilteredItem['id'],
            ];
        }

        $data = array();
        switch ($mode) {
            case 'default':
                $data = getProductArray($db);
                buildCatalogue($data, $cart);
                break;
            case 'sort':
                switch ($sortType) {
                    case 'descending':
                        $data = getProductArray($db);
                        usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
                        buildCatalogue($data, $cart);
                        break;
                    case 'ascending':
                        $data = getProductArray($db);
                        usort($data, fn ($a, $b) => $b['Name'] <=> $a['Name']);
                        buildCatalogue($data, $cart);
                        break;
                    case 'default':
                        $data = getProductArray($db);
                        buildCatalogue($data, $cart);
                        break;
                }
                break;
            case 'search':
                // > db.products.createIndex({Name:"text"})
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
                    switch ($sortType) {
                        case 'descending':
                            usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
                            break;
                        case 'ascending':
                            usort($data, fn ($a, $b) => $b['Name'] <=> $a['Name']);
                            break;
                        case 'default':
                            break;
                    }
                }
                if (!empty($data)) {
                    buildCatalogue($data, $cart);
                } else {
                    echo "<p class=\"error-message\">No results found</p>";
                }
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

function buildCatalogue(array $data, array $cart)
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
                <?php
                $found = null;
                foreach ($cart as $cartItem) {
                    if ($product_details['_id'] == $cartItem['id']) {
                        echo '<div class="remove-to-cart-btn" data-id="' . $product_details['_id'] . '">';
                        echo '  <p><span class="icon-cart-plus"></span>Remove to cart</p></div>';
                        $found = true;
                        break;
                    }
                }
                if (!isset($found)) {
                    echo '<div class="add-to-cart-btn" data-id="' . $product_details['_id'] . '">';
                    echo '  <p><span class="icon-cart-plus"></span>Add to cart</p></div>';
                }
                ?>
            </div>
        </div><?php }
        }
                ?>
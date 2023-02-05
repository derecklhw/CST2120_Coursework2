<?php
include "db.php";

$build = filter_input(INPUT_POST, 'build', FILTER_SANITIZE_STRING);
$unfilteredCart = json_decode($_POST['cart'], true);
$filteredCart = [];
foreach ($unfilteredCart as $item) {
    $filteredCart[] = [
        'id' => filter_var($item['id'], FILTER_SANITIZE_STRING),
        'name' => filter_var($item['name'], FILTER_SANITIZE_STRING),
        'price' => filter_var($item['price'], FILTER_SANITIZE_NUMBER_INT),
        'season' => filter_var($item['season'], FILTER_SANITIZE_STRING),
        'category' => filter_var($item['category'], FILTER_SANITIZE_STRING),
        'image_link' => filter_var($item['image_link'], FILTER_SANITIZE_URL),
        'quantity' => filter_var($item['quantity'], FILTER_SANITIZE_NUMBER_INT),
    ];
}

switch ($build) {
    case 'catalogue':
        $mode = filter_input(INPUT_POST, 'mode', FILTER_SANITIZE_STRING);
        $sortType = filter_input(INPUT_POST, 'format', FILTER_SANITIZE_STRING);
        $search_string = filter_input(INPUT_POST, 'search_parameter', FILTER_SANITIZE_STRING);

        $data = array();
        switch ($mode) {
            case 'default':
                $data = getProductArray($db);
                buildCatalogue($data, $filteredCart);
                break;
            case 'sort':
                switch ($sortType) {
                    case 'descending':
                        $data = getProductArray($db);
                        usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
                        buildCatalogue($data, $filteredCart);
                        break;
                    case 'ascending':
                        $data = getProductArray($db);
                        usort($data, fn ($a, $b) => $b['Name'] <=> $a['Name']);
                        buildCatalogue($data, $filteredCart);
                        break;
                    case 'default':
                        $data = getProductArray($db);
                        buildCatalogue($data, $filteredCart);
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
                    buildCatalogue($data, $filteredCart);
                } else {
                    echo "<p class=\"error-message\">No results found</p>";
                }
                break;
        }
        break;
    case 'cart':
        buildCart($filteredCart);
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
        </div>
    <?php }
}

function buildCart(array $cart)
{
    ?>
    <div id="cart-section">
        <!-- Checkout section -->
        <?php
        if (empty($cart)) {
            $total = 0;
            $count = 0;
        } else {
            $total = 0;
            $count = 0;
            foreach ($cart as $cartItem) {
                $count += $cartItem['quantity'];
                $total += $cartItem['price'] * $cartItem['quantity'];
        ?>
                <div class="product-order">
                    <!-- Product Image -->
                    <div class="product-img column">
                        <img src="<?= $cartItem['image_link'] ?>" src="<?= $cartItem['image_link'] ?>" />
                    </div>
                    <!-- Product Description -->
                    <div class="product-description column">
                        <p class="name"><?= $cartItem['name'] ?></p>
                        <p class="price">$<?= $cartItem['price'] ?></p>
                    </div>

                    <!-- Quantity Number Spinner -->
                    <div class="number-spinner column">
                        <form action="">
                            <label for="quantity"></label>
                            <input type="number" id="quantity" name="quantity" min="0" max="5" placeholder="<?= $cartItem['quantity'] ?>" />
                        </form>
                    </div>

                    <!-- Product total order price -->
                    <div class="product-price column">
                        <p class="price">$<?= $cartItem['quantity'] * $cartItem['price'] ?></p>
                    </div>

                    <!-- Remove product in cart button -->
                    <div class="trash-icon column">
                        <p class="fa-solid fa-trash"></p>
                    </div>
                </div>
        <?php
            }
        }

        ?>
    </div>
    <div id="checkout-section">
        <!-- Number of items and  shipping sections -->
        <div class="calculation-section">
            <div class="row">
                <p><?= $count ?> items</p>
                <p class="value">$<?= $total ?></p>
            </div>
            <div class="row">
                <p>Shipping</p>
                <p class="value">Free</p>
            </div>
        </div>

        <!-- Total Price and Taxes Section -->
        <div class="total-section">
            <div class="row">
                <p>Total (tax excl.)</p>
                <p class="value">$<?= $total ?></p>
            </div>
            <div class="row">
                <p>Taxes</p>
                <p class="value">$<?= $total * 0.15 ?></p>
            </div>
        </div>

        <!-- Checkout btn -->
        <div class="checkout-btn-section">
            <p><span class="icon-checkout-cart <?= (empty($cart)) ? "disable" : "" ?>"></span>Checkout</p>
        </div>
    </div>
<?php
}
?>
<?php
include "db.php";
include "get.php";

// start session
session_start();
$customerId = $_SESSION['loggedIn'];

// get the data from the client and sanitize the post parameters as security.
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

// switch statement to determine which features to build the html structure
switch ($build) {
    case 'catalogue':
        // sanitize more post parameters related to the build category
        $mode = filter_input(INPUT_POST, 'mode', FILTER_SANITIZE_STRING);
        $sortType = filter_input(INPUT_POST, 'format', FILTER_SANITIZE_STRING);
        $search_string = filter_input(INPUT_POST, 'search_parameter', FILTER_SANITIZE_STRING);

        // initialize an array to store the retrieved informations from mongodb
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
                        // sort in descending order algorithm
                        usort($data, fn ($a, $b) => $a['Name'] <=> $b['Name']);
                        buildCatalogue($data, $filteredCart);
                        break;
                    case 'ascending':
                        $data = getProductArray($db);
                        // sort in ascending order algorithm
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
                    $data = getProductArrayWithSearchCriteria($db, $search_criteria);
                    // switch case to decide the sort format to display
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
        buildCart($filteredCart, $db);
        break;
    case 'recommendation':
        // sanitize the search array received from html session storage
        $unfiltered_search_array = json_decode($_POST['search'], true);
        $filtered_search_array = [];
        foreach ($unfiltered_search_array as $item) {
            $filtered_search_array[] = filter_var($item, FILTER_SANITIZE_STRING);
        }

        // fruit category counter
        $cart_category = [
            "apples and pears" => 0,
            "citrus" => 0,
            "stone fruit" => 0,
            "berries" => 0,
            "melons" => 0,
            "tropical and exotic" => 0
        ];

        // switch case to decide the recommendation algorithm
        // no value in search and cart; default recommendation will be built
        if (empty($filtered_search_array) && empty($filteredCart)) {
            $data = getProductArray(($db));
            chooseNumberOfItemsForRecommendation($data);
            // value in search and no value in cart; search based recommendation will be built
        } elseif ($filtered_search_array && empty($filteredCart)) {
            $higher_occurence_word = "";
            $higher_occurence_count = 0;
            foreach ($filtered_search_array as $search_item) {
                $occurence = count(array_keys($filtered_search_array, $search_item));
                if ($occurence > $higher_occurence_count) {
                    $higher_occurence_word = $search_item;
                }
            }
            $search_criteria = [
                '$text' => ['$search' => $higher_occurence_word]
            ];
            $data = getProductArrayWithSearchCriteria($db, $search_criteria);
            chooseNumberOfItemsForRecommendation($data);
            // value in both search and cart; cart based recommendation will be built as priority
        } else {
            foreach ($filteredCart as $cartItem) {
                $cart_category[$cartItem['category']]++;
            };
            $max = max($cart_category);
            $max_category = array_search($max, $cart_category);
            $search_criteria = [
                'Category' => $max_category
            ];
            $data = getProductArrayWithSearchCriteria($db, $search_criteria);
            chooseNumberOfItemsForRecommendation($data);
        }
        break;
    case 'pastOrderTable':
        $data = getPastOrders($db, $customerId);
        buildPastOrderTable($data);
        break;
    case 'userDetails':
        $data = getUserDetails($db, $customerId);
        buildUserDetails($data);
        break;
    case "editAccount":
        $data = getUserDetails($db, $customerId);
        buildEditAccount($data);
        break;
}

// build catalogue html function
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

// build cart html function
function buildCart(array $cart, object $db)
{
    ?>
    <div id="cart-section">
        <!-- Checkout section -->
        <?php
        if (empty($cart)) {
            $total = 0;
            $count = 0;
            echo "<p class=\"error-message\">Your Shopping Cart is empty.</p>";
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
                        <form action="" onsubmit="return false;">
                            <input id="quantity" type="number" name="quantity" min="0" max="<?= getProductStockAvailable($db, $cartItem['id']) ?>" value="<?= $cartItem['quantity'] ?>" data-id="<?= $cartItem['id'] ?>" />
                        </form>
                    </div>

                    <!-- Product total order price -->
                    <div class="product-price column">
                        <p class="price">$<?= $cartItem['quantity'] * $cartItem['price'] ?></p>
                    </div>

                    <!-- Remove product in cart button -->
                    <div class="trash-icon column">
                        <p class="fa-solid fa-trash" data-id="<?= $cartItem['id'] ?>"></p>
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
    </div>
    <?php
}

// choose the number of items for display in recommendation section based on result retrived from mongodb
function chooseNumberOfItemsForRecommendation($data)
{
    if (count($data)) {
        if (count($data) <= 4) {
            buildRecommendation($data, count($data) - 1);
        } else {
            buildRecommendation($data, 3);
        }
    }
}

// build recommendation html section
function buildRecommendation(array $data, int $count)
{
    for ($x = 0; $x <= $count; $x++) { ?>
        <!-- Product Example -->
        <div class="fruit">
            <img src="<?= $data[$x]["Image_link"] ?>" alt="<?= $data[$x]["Image_link"] ?>" />
            <div class="text">
                <h2><?= $data[$x]["Name"] ?></h2>
                <span>260kg+</span>
                <p>Sales</p>
            </div>
        </div>
    <?php }
}

// build past order html table
function buildPastOrderTable(array $data)
{
    ?>
    <thead>
        <td>Order Id</td>
        <td>Order Date</td>
        <td>Description</td>
        <td>Total Price</td>
        <td>Delivering Address</td>
    </thead>
    <?php
    foreach ($data as $order) { ?>
        <tr>
            <td><?= $order["_id"] ?></td>
            <td><?php
                $date = new DateTime($order["order_date"]);
                echo $date->format('d-m-Y');
                ?></td>
            <td><?php
                foreach ($order["orders_product"] as $item) {
                    echo $item["name"] . " x " . $item["quantity"] . "<br>";
                }
                ?>
            </td>
            <td><?= $order["total_price"] ?></td>
            <td><?= $order["address"] ?></td>
        </tr>
    <?php
    }
}

// build user html details
function buildUserDetails(object $data)
{
    ?>
    <p>Surname: <?= $data['Surname'] ?></p>
    <p>Name: <?= $data['Name'] ?></p>
    <p>Email: <?= $data['Email'] ?></p>
    <p>Phone: <?= $data['Phone'] ?></p>
    <p>Address: <?= $data['Address'] ?></p>
<?php
}

// build edit account html dialog
function buildEditAccount(object $data)
{
?>
    <div>Surname</div>
    <input type="text" id="surname_input" value="<?= $data['Surname'] ?>" />
    <div>Name</div>
    <input type="text" id="name_input" value="<?= $data['Name'] ?>" />
    <div>Email</div>
    <input type="text" id="email_input" value="<?= $data['Email'] ?>" />
    <div>Phone</div>
    <input type="text" id="phone_input" value="<?= $data['Phone'] ?>" />
    <div>Address</div>
    <input type="text" id="address_input" value="<?= $data['Address'] ?>" />
<?php
}
?>
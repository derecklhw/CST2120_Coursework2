<?php
session_start();
if (!isset($_SESSION['loggedIn'])) {
    header("Location: login.php");
    exit();
}
?>
<?php
include "common.php";
outputHead("Fruity Shop - Cart", "styles/cart.css", "cart.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<!-- Shopping Kart Section -->
<div class="content">
    <h1>Shopping Kart</h1>
    <p>Limited Quantities Only</p>

    <!-- Button redirect to catalogue -->
    <a href="index.php#catalogue" class="shop-now">Shop Now</a>
</div>
</div>
<main>
    <section id="shopping-cart" name="shopping-cart">
        <div class="section-wrap">
            <div class="sub-section-title">
                <p>Shopping Cart</p>
            </div>

            <div class="sub-sections">
            </div>
        </div>

        <!-- Cart button section -->
        <div class="cart-btn-section">
            <a href="index.php#catalogue">
                <span class="fa-solid fa-chevron-left icon-continue-shopping"></span> Continue Shopping
            </a>
            <p><span class="icon-checkout-cart"></span>Checkout</p>
        </div>

        <!-- Dialog section -->
        <div class="dialog-section">
            <div id="confirmation-dialog" title="Checkout">
                <h3>Order Summary</h3>
                <br>
                <p>Confirm order?</p>
            </div>

            <div id="approved-confirmation-dialog" title="Confirmation">
                <h3>Thank you for your order.</h3>
                <br>
                <p>Your order has been successfully processed.</p>
                <br>
                <p>You can view your order history by going to the <a class="my-accout-link" href="account.php">my account</a> page.</p>
            </div>

            <div id="empty-cart-dialog" title="Warning">
                <h3>Your shopping cart is empty</h3>
                <br>
                <p>Continue to add fruits in cart.</p>
            </div>

        </div>
    </section>
</main>

<?php
outputFooter();
?>
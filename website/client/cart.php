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

        <div class="dialog-section">
            <div id="confirmation-dialog" title="Confirmation">
                <p>Confirm items in your cart?</p>
            </div>

            <div id="approved-confirmation-dialog" title="Confirmation">
                <h3>Thank you for your order.</h3>
                <br>
                <p>Your order has been successfully processed.</p>
            </div>
        </div>
    </section>
</main>

<?php
outputFooter();
?>
<?php
include "common.php";
outputHead("Fruity Shop - Cart", "styles/cart.css", "index.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<!-- Shopping Kart Section -->
<div class="content">
    <h1>Shopping Kart</h1>
    <p>Limited Quantities Only</p>

    <!-- Button redirect to catalogue -->
    <a href="index.html#catalogue" class="shop-now">Shop Now</a>
</div>
</div>
<main>
    <section id="shopping-cart" name="shopping-cart">
        <div class="section-wrap">
            <div class="sub-section-title">
                <p>Shopping Cart</p>
            </div>

            <div class="sub-sections">
                <!-- Display the products already in cart -->
                <div id="cart-section">
                    <!-- Order Example-->
                    <div class="product-order">
                        <!-- Product Image -->
                        <div class="product-img column">
                            <img src="assets/images/fruits/grape-black.jpg" src="grape-black-img" />
                        </div>
                        <!-- Product Description -->
                        <div class="product-description column">
                            <p class="name">Grape Black</p>
                            <p class="price">$13.22</p>
                        </div>

                        <!-- Quantity Number Spinner -->
                        <div class="number-spinner column">
                            <form action="">
                                <label for="quantity"></label>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="1" />
                            </form>
                        </div>

                        <!-- Product total order price -->
                        <div class="product-price column">
                            <p class="price">$13.22</p>
                        </div>

                        <!-- Remove product in cart button -->
                        <div class="trash-icon column">
                            <p class="fa-solid fa-trash"></p>
                        </div>
                    </div>

                    <div class="product-order">
                        <div class="product-img column">
                            <img src="assets/images/fruits/apple.jpg" src="apple-img" />
                        </div>
                        <div class="product-description column">
                            <p class="name">Fresh Apple</p>
                            <p class="price">$16.51</p>
                        </div>
                        <div class="number-spinner column">
                            <form action="">
                                <label for="quantity"></label>
                                <input type="number" id="quantity" name="quantity" min="1" max="5" placeholder="1" />
                            </form>
                        </div>
                        <div class="product-price column">
                            <p class="price">$16.51</p>
                        </div>
                        <div class="trash-icon column">
                            <p class="fa-solid fa-trash"></p>
                        </div>
                    </div>
                </div>

                <!-- Checkout section -->
                <div id="checkout-section">
                    <!-- Number of items and  shipping sections -->
                    <div class="calculation-section">
                        <div class="row">
                            <p>2 items</p>
                            <p class="value">$28.73</p>
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
                            <p class="value">$28.73</p>
                        </div>
                        <div class="row">
                            <p>Taxes</p>
                            <p class="value">$4.50</p>
                        </div>
                    </div>

                    <!-- Checkout btn -->
                    <div class="checkout-btn-section">
                        <p><span class="icon-checkout-cart"></span>Checkout</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- Continue Shopping button -->
        <div class="continue-shopping-section">
            <a href="index.php#catalogue">
                <span class="fa-solid fa-chevron-left"></span><span class="icon-continue-shopping"></span> Continue Shopping
            </a>
        </div>
    </section>
</main>

<?php
outputFooter();
?>
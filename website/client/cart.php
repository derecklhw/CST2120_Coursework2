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
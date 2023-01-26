<?php
include "common.php";
outputHead("Fruity Kart - Home Page", "styles/index.css");
?>

<body>
    <!--  Hero Section -->
    <div class="hero">
        <!-- Hero background image -->
        <img class="background" src="assets/images/background/background1.jpg" />

        <?php
        outputNavbar();
        ?>

        <div class="content">
            <p>Mega Sale on fruit categories</p>
            <h1>Simply DElicious</h1>
            <p>Limited Quantities Only</p>

            <!-- Button redirect to catalogue -->
            <a href="index.html#catalogue" class="shop-now">Shop Now</a>
        </div>
    </div>
    <main>
        <!-- Recommendation Section -->
        <section id="recommendation" name="recommendation">
            <div class="section-wrap">
                <div class="sub-section-title">
                    <p>Recommendation</p>
                    <a href="">See more<span class="fa-solid fa-angles-right"></span></a>
                </div>

                <!-- Recommendation List -->
                <div class="products">
                    <!-- Product Example -->
                    <div class="fruit">
                        <img src="assets/images/fruits/apple.jpg" alt="apple" />
                        <div class="text">
                            <h2>Apple</h2>
                            <span>260kg+</span>
                            <p>Sales</p>
                        </div>
                    </div>

                    <div class="fruit">
                        <img src="assets/images/fruits/mango.jpg" alt="apple" />

                        <div class="text">
                            <h2>Mango</h2>
                            <span>180kg+</span>
                            <p>Sales</p>
                        </div>
                    </div>

                    <div class="fruit">
                        <img src="assets/images/fruits/peach.jpg" alt="apple" />
                        <div class="text">
                            <h2>Peach</h2>
                            <span>220kg+</span>
                            <p>Sales</p>
                        </div>
                    </div>

                    <div class="fruit">
                        <img src="assets/images/fruits/strawberry.jpg" alt="apple" />
                        <div class="text">
                            <h2>Strawberry</h2>
                            <span>260kg+</span>
                            <p>Sales</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Catalog Section -->
        <section id="catalogue" name="catalogue">
            <div class="section-wrap">
                <!-- Image Banner Section -->
                <div class="banner-section">
                    <img src="assets/images/banner/banner1.jpg" alt="banner" />
                </div>

                <div class="sub-section-title">
                    <p>Catalog</p>
                    <a href="">
                        See more<span class="fa-solid fa-angles-right"></span></a>
                </div>

                <!-- Search and Sorting Section -->
                <div class="search-sorting-bar">
                    <!-- Search Bar -->
                    <div id="search-section">
                        <input type="text" id="search-input" placeholder="Search..." />
                        <a href="" class="fa-solid fa-magnifying-glass"></a>
                    </div>

                    <!-- Sort Dropdown -->
                    <div id="sort-section">
                        <label for="sort-format">Sort by:</label>
                        <select name="sort-format" id="sort-format">
                            <option value="descending">Name A to Z</option>
                            <option value="ascending">Name Z to A</option>
                        </select>
                    </div>
                </div>

                <!-- Featured Product Listing -->
                <div class="featured-products">
                    <!-- Product Example -->
                    <div class="product-wrap">
                        <div class="product-img">
                            <img src="assets/images/fruits/apple.jpg" alt="apple_img" />
                        </div>
                        <div class="product-description">
                            <p class="product-name">Fresh Apple</p>
                            <p class="product-price">
                                <strong>Price:</strong>
                                <span class="price">160</span>$/kg
                            </p>
                            <div class="add-to-cart-btn">
                                <p><span class="icon-cart-plus"></span>Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <div class="product-wrap">
                        <div class="product-img">
                            <img src="assets/images/fruits/orange.jpg" alt="orange_img" />
                        </div>
                        <div class="product-description">
                            <p class="product-name">Fresh Orange</p>
                            <p class="product-price">
                                <strong>Price:</strong>
                                <span class="price">160</span>$/kg
                            </p>
                            <div class="add-to-cart-btn">
                                <p><span class="icon-cart-plus"></span>Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <div class="product-wrap">
                        <div class="product-img">
                            <img src="assets/images/fruits/orange-green.jpg" alt="orange_green_img" />
                        </div>
                        <div class="product-description">
                            <p class="product-name">Green Orange</p>
                            <p class="product-price">
                                <strong>Price:</strong>
                                <span class="price">160</span>$/kg
                            </p>
                            <div class="add-to-cart-btn">
                                <p><span class="icon-cart-plus"></span>Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <div class="product-wrap">
                        <div class="product-img">
                            <img src="assets/images/fruits/grape.jpg" alt="grape_img" />
                        </div>
                        <div class="product-description">
                            <p class="product-name">Fresh Grape</p>
                            <p class="product-price">
                                <strong>Price:</strong>
                                <span class="price">160</span>$/kg
                            </p>
                            <div class="add-to-cart-btn">
                                <p><span class="icon-cart-plus"></span>Add to cart</p>
                            </div>
                        </div>
                    </div>

                    <div class="product-wrap">
                        <div class="product-img">
                            <img src="assets/images/fruits/kiwi.jpg" alt="kiwi_img" />
                        </div>
                        <div class="product-description">
                            <p class="product-name">Fresh Kiwi</p>
                            <p class="product-price">
                                <strong>Price:</strong>
                                <span class="price">160</span>$/kg
                            </p>
                            <div class="add-to-cart-btn">
                                <p><span class="icon-cart-plus"></span>Add to cart</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <?php
    outputFooter();
    ?>
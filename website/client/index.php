<?php
include "common.php";
outputHead("Fruity Kart - Home Page", "styles/index.css", "index.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<div class="content">
    <p>Mega Sale on fruit categories</p>
    <h1>Simply DElicious</h1>
    <p>Limited Quantities Only</p>

    <!-- Button redirect to catalogue -->
    <a href="index.php#catalogue" class="shop-now">Shop Now</a>
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
            <div id="featured-products"></div>
        </div>
    </section>
</main>

<?php
outputFooter();
?>
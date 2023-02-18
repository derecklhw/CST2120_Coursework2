<?php
session_start();
if (!isset($_SESSION['loggedIn'])) {
    header("Location: login.php");
    exit();
}
?>
<?php
include "common.php";
outputHead("Fruity Shop - Account", "styles/account.css", "account.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<!-- User Account Section-->
<div class="container">
    <!-- Left container -->
    <div class="left-container">
        <!-- User Logo -->
        <div class="account-logo">
            <p class="fa-solid fa-user fa-2xl"></p>
        </div>

        <!-- User Account Name -->
        <div id="account-name"></div>
    </div>

    <!-- Right container -->
    <div class="right-container">
        <!-- User Account Details and Edit Buttons -->
        <h2>Account Details</h2>
        <div class="info-container">
            <div id="account-details-container"></div>
            <a id="edit-account-btn">Click to edit</a>
        </div>
    </div>
</div>
<div class="dialog-section">
    <div id="edit-account-dialog" title="Edit Account"></div>
</div>
</div>
<main>
    <!-- Your Orders section -->
    <section id="your-orders" name="your-orders">
        <div class="section-wrap">
            <!-- Banner Image -->
            <div class="banner-section">
                <img src="assets/images/banner/banner1.jpg" alt="banner" />
            </div>

            <div class="sub-section-title">
                <p>Your Orders</p>
            </div>

            <!-- Your Orders' Table -->
            <div class="table-container">
                <table id="order-table"></table>
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
<?php
include "common.php";
outputHead("Fruity Shop - Account", "styles/account.css");
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
        <div class="account-name">
            <p>Damien Maujean</p>
        </div>
    </div>

    <!-- Right container -->
    <div class="right-container">
        <!-- User Account Details and Edit Buttons -->
        <h2>Account Details</h2>
        <div class="info-container">
            <div class="details-container">
                <p>Surname: <span class="surname value">Maujean</span></p>
                <a class="fa-solid fa-pen-to-square"></a>
            </div>
            <div class="details-container">
                <p>Name: <span class="name value">Damien</span></p>
                <a class="fa-solid fa-pen-to-square"></a>
            </div>
            <div class="details-container">
                <p>Email: <span class="email value">dm817@mdx.ac.uk</span></p>
                <a class="fa-solid fa-pen-to-square"></a>
            </div>
            <div class="details-container">
                <p>Phone: <span class="phone value">5785 4821</span></p>
                <a class="fa-solid fa-pen-to-square"></a>
            </div>
            <div class="details-container">
                <p>Address: <span class="address value">Tamarin</span></p>
                <a class="fa-solid fa-pen-to-square"></a>
            </div>
        </div>
    </div>
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
                <table id="order-table">
                    <thead>
                        <td>Order Id</td>
                        <td>Order Date</td>
                        <td>Description</td>
                        <td>Total Price</td>
                        <td>Delivering Address</td>
                    </thead>

                    <tr>
                        <td>Order 1</td>
                        <td>10/10/2022</td>
                        <td>Order 1 description</td>
                        <td>10.00</td>
                        <td>Flic en Flac</td>
                    </tr>

                    <tr>
                        <td>Order 2</td>
                        <td>12/01/2023</td>
                        <td>Order 2 description</td>
                        <td>20.00</td>
                        <td>Tamarin</td>
                    </tr>

                    <tr>
                        <td>Order 3</td>
                        <td>13/01/2023</td>
                        <td>Order 3 description</td>
                        <td>30.00</td>
                        <td>Tamarin</td>
                    </tr>

                    <tr>
                        <td>Order 4</td>
                        <td>31/02/2023</td>
                        <td>Order 4 description</td>
                        <td>40.00</td>
                        <td>Tamarin</td>
                    </tr>
                </table>
            </div>
        </div>

        <!-- Continue Shopping button -->
        <div class="continue-shopping-section">
            <a href="index.html#catalogue">
                <span class="fa-solid fa-chevron-left"></span><span class="icon-continue-shopping"></span> Continue Shopping
            </a>
        </div>
    </section>
</main>

<?php
outputFooter();
?>
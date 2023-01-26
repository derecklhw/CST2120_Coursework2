<?php

//output header tag
function outputHead()
{
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8" />';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge" />';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    echo '<title>Fruity Kart - Home Page</title>';
    echo '<link rel="stylesheet" href="styles/index.css" />';
    echo '<!-- Link to fontawesome api -->';
    echo '<script
            src="https://kit.fontawesome.com/6792829ccf.js"
            crossorigin="anonymous"></script>';
    echo '</head>';
}

function outputNavbar()
{
    echo '<!-- Navigation bar -->';
    echo '<nav>';
    echo '<!-- Website logo -->';
    echo '<a href="index.html">';
    echo '<img src="assets/images/logo.png" alt="logo" />';
    echo '</a>';
    echo '<!-- Navigation links-->';
    echo '<ul>';
    echo '<li><a href="index.html">Home</a></li>';
    echo '<li><a href="index.html#catalogue">Catalog</a></li>';
    echo '<li><a href="account.html">Account</a></li>';
    echo '</ul>';
    echo '<!-- Basket and login links -->';
    echo '<ul>';
    echo '<li>';
    echo '<a id="basket-text" href="cart.html"';
    echo '><span class="fa-solid fa-basket-shopping"></span> Basket</a>';
    echo '</li>';
    echo '<li>';
    echo '<a id="login-text" href="login.html"';
    echo '><span class="fa-solid fa-user"></span> Login</a>';
    echo '</li>';
    echo '</ul>';
    echo '</nav>';
}

function outputFooter()
{
    echo '<!-- Footer Section -->';
    echo '<footer>';
    echo '<div class="columns">';
    echo '<div class="social">';
    echo '<!-- Website Logo -->';
    echo '<img src="assets/images/logo.png" alt="logo" />';
    echo '<p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
          maiores asperiores laborum at repellendus ab optio? Expedita sed in,
          sequi praesentium illum consectetur eaque quibusdam neque debitis
          culpa reiciendis laudantium!
        </p>';
    echo '<!-- Social Media Icons & Links -->';
    echo '<div class="social-medias">';
    echo '<a href="https://facebook.com" class="fa-brands fa-facebook"></a>';
    echo '<a href="https://google.com" class="fa-brands fa-google"></a>';
    echo '<a href="https://twitter.com" class="fa-brands fa-twitter"></a>';
    echo '<a href="https://linkedin.com" class="fa-brands fa-linkedin"></a>';
    echo '<a href="https://youtube.com" class="fa-brands fa-youtube"></a>';
    echo '<a href="https://instagram.com" class="fa-brands fa-instagram"></a>';
    echo '</div>';
    echo '</div>';

    echo '<!-- Contact Us details -->';
    echo '<div class="contact-us">';
    echo '<h2>Contact Us</h2>';
    echo '<ul>';
    echo '<li>
            <i class="fa-solid fa-location-dot"></i>
            <p>Coastal Road, Flic en Flac</p>
          </li>';
    echo '<li>
            <i class="fa-solid fa-envelope"></i>
            <p>sales@mdx.mu</p>
          </li>';
    echo '<li>
            <i class="fa-solid fa-phone"></i>
            <p>403 6400</p>
          </li>';
    echo '<li>
            <i class="fa-solid fa-clock"></i>
            <p>8:00 - 19:00, Mon - Sat</p>
          </li>';
    echo '</ul>';
    echo '</div>';

    echo '<!-- Quick Links -->';
    echo '<div class="quick-links">';
    echo '<h2>Quick Links</h2>';
    echo '<ul>';
    echo '<li>
            <a href="index.html">Home</a>
          </li>';
    echo '<li>
            <a href="index.html#catalogue">Catalogue</a>
          </li>';
    echo '<li>
            <a href="account.html">Account</a>
          </li>';
    echo '<li>
            <a href="account.html#your-orders">Your Orders</a>
          </li>';
    echo '</ul>';
    echo '</div>';
    echo '</div>';
    echo '<!-- Copyright Section -->';
    echo '<div class="copyright">';
    echo '<p>&#169; Copyright 2023 by Fruity Shop. All Rights Reserved</p>';
    echo '</div>';
    echo '</footer>';
    echo '</body>';
    echo '</html>';
}

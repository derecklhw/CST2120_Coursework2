<?php

//output header tag
function outputHead(string $title, string $css_file)
{
    echo '<!DOCTYPE html>';
    echo '<html lang="en">';
    echo '<head>';
    echo '<meta charset="UTF-8" />';
    echo '<meta http-equiv="X-UA-Compatible" content="IE=edge" />';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="' . $css_file . '" />';
    echo '<!-- Link to fontawesome api -->';
    echo '<script
            src="https://kit.fontawesome.com/6792829ccf.js"
            crossorigin="anonymous"></script>';
    echo '</head>';
}

//output opening tag for body and hero class
function outputOpeningBodyAndHeroClass(int $background_image)
{
    echo '<body>';
    echo '<!--  Hero Section -->';
    echo '<div class="hero">';
    echo '<!-- Hero background image -->';
    echo '<img class="background" src="assets/images/background/background' . $background_image . '.jpg" />';
}

//output navigation bar
function outputNavbar()
{
    echo '<!-- Navigation bar -->';
    echo '<nav>';
    echo '<!-- Website logo -->';
    echo '<a href="index.html">';
    echo '<img src="assets/images/logo.png" alt="logo" />';
    echo '</a>';
    echo '<!-- Navigation links-->';


    //output middle page links
    echo '<ul>';
    $middle_page_links = array(
        "Home" => "index.php",
        "Catalog" => "index.php#catalogue",
        "Account" => "account.php"
    );

    foreach ($middle_page_links as $key => $value) {
        echo '<li><a href="' . $value . '">' . $key . '</a></li>';
    }
    echo '</ul>';

    //output basket and login links
    echo '<!-- Basket and login links -->';
    echo '<ul>';

    $right_page_links = array(
        array("Basket", "basket-text", "cart.php", "fa-basket-shopping"),
        array("Login", "login-text", "login.php", "fa-user")
    );

    for ($x = 0; $x <= count($right_page_links); $x++) {
        echo '<li>';
        echo '<a id="' . $right_page_links[$x][1] . '" href="' . $right_page_links[$x][2] . '"';
        echo '><span class="fa-solid ' . $right_page_links[$x][3] . '"></span> ' . $right_page_links[$x][0] . '</a>';
        echo '</li>';
    }
    echo '</ul>';
    echo '</nav>';
}

//output footer
function outputFooter()
{
    echo '<!-- Footer Section -->';
    echo '<footer>';
    echo '<div class="columns">';
    $column_names = array("social", "contact-us", "quick-links");
    echo '<div class="' . $column_names[0] . '">';
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

    $social_medias = array(
        "fa-facebook" => "https://facebook.com",
        "fa-google" => "https://google.com",
        "fa-twitter" => "https://twitter.com",
        "fa-linkedin" => "https://linkedin.com",
        "fa-youtube" => "https://youtube.com",
        "fa-instagram" => "https://instagram.com"
    );

    foreach ($social_medias as $key => $value) {
        echo '<a href="' . $value . '" class="fa-brands ' . $key . '"></a>';
    }
    echo '</div>';
    echo '</div>';

    echo '<!-- Contact Us details -->';
    echo '<div class="' . $column_names[1] . '">';
    echo '<h2>Contact Us</h2>';
    echo '<ul>';

    $contact_us_infos = array(
        array("fa-location-dot", "Coastal Road, Flic en Flac"),
        array("fa-envelope", "sales@mdx.mu"),
        array("fa-phone", "403 6400"),
        array("fa-clock", "8:00 - 19:00, Mon - Sat"),
    );

    for ($x = 0; $x <= count($contact_us_infos); $x++) {
        echo '<li>
                <i class="fa-solid ' . $contact_us_infos[$x][0] . '"></i>
                <p> ' . $contact_us_infos[$x][1] . '</p>
              </li>';
    }

    echo '</ul>';
    echo '</div>';

    echo '<!-- Quick Links -->';
    echo '<div class="' . $column_names[2] . '">';
    echo '<h2>Quick Links</h2>';
    echo '<ul>';

    $quick_links_links = array(
        "Home" => "index.php",
        "Catalog" => "index.php#catalogue",
        "Account" => "account.php",
        "Basket" => "cart.php"
    );

    foreach ($quick_links_links as $key => $value) {
        echo '<li><a href="' . $value . '">' . $key . '</a></li>';
    }
    echo '</ul>';

    echo '</div>';
    echo '</div>';
    echo '<!-- Copyright Section -->';
    echo '<div class="copyright">';
    echo '<p>&#169; Copyright ' . date("Y") . ' by Fruity Shop. All Rights Reserved</p>';
    echo '</div>';
    echo '</footer>';
    echo '</body>';
    echo '</html>';
}

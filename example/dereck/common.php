<?php

//Ouputs background youtube embedded links
function backgroundYoutubeEmbedded($video_number)
{
    // Associative Arrays link to background youtube embedded links
    $background_video = array(
        "1" => "tLQvJqlrW0U",
        "2" => "iL79pGbdvuY",
        "3" => "6iQgd5ftmHY",
        "4" => "_50H8EtzYkM",
        "5" => "pIoQsUxn-uE",
        "6" => "7ZY6jS-fv4E",
        "7" => "eZFY17eWPs0",
        "8" => "2hJ73bBM9e8",
        "9" => "dWPL0bSU1o0",
        "10" => "fOSNELa3y2g"
    );

    // Output a background video
    foreach ($background_video as $key => $value) {
        if ($key == $video_number) {
            echo '<!--Output a background video for hero container-->';
            echo '<iframe class="back-video" src="https://www.youtube.com/embed/' . $value . '?controls=0&autoplay=1&mute=1&playsinline=1&playlist=' . $value . '&loop=1"></iframe>';
        }
    };
}

//Ouputs the header for the page and opening body tag
function outputHeader(string $title, string $php_file = "none")
{
    echo '<!DOCTYPE html>';
    echo '<html lang="en-US">';
    echo '<head>';
    echo '<meta charset="UTF-8" />';
    echo '<meta name="viewport" content="width=device-width, initial-scale=1.0" />';
    echo '<title>' . $title . '</title>';
    echo '<link rel="stylesheet" href="styles/styles.css" />';

    // Outputs below link if the php file is explore.php
    if ($php_file == "explore") {
        echo '<link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.css"
      />';
    }

    // link game.html to game/index.js
    if ($php_file == "game") {
        echo '<script src="scripts/game/sprite.js"></script>';
        echo '<script src="scripts/game/enemyBoss.js"></script>';
        echo '<script src="scripts/game/particleController.js"></script>';
        echo '<script src="scripts/game/particle.js"></script>';
        echo '<script src="scripts/game/projectileController.js"></script>';
        echo '<script src="scripts/game/projectile.js"></script>';
        echo '<script src="scripts/game/enemiesGrid.js"></script>';
        echo '<script src="scripts/game/enemy.js"></script>';
        echo '<script src="scripts/game/player.js"></script>';
        echo '<script src="scripts/game/fx.js"></script>';
        echo '<script src="scripts/game/game.js"></script>';
        echo '<script src="scripts/game/gameloop.js"></script>';
        echo '<script src="gui.js"></script>';
        echo '<script src="scripts/game/index.js"></script>';
    }

    //Provide login validation functions
    if ($php_file == "support") {
        echo '<script src="scripts/support.js"></script>';
    }

    //Provide login validation functions
    if ($php_file == "login") {
        echo '<script src="scripts/login.js"></script>';
    }

     // Provide registration and form validation functions
     if ($php_file == "register") {
        echo '<script src="scripts/registration.js"></script>';
    }

    // Provide table and sorting functions for leaderboard
    if ($php_file == "leaderboard") {
        echo '<script src="scripts/leaderboard.js"></script>';
    }

    // Links to fontawesome api
    echo '<script src="https://kit.fontawesome.com/6792829ccf.js" crossorigin="anonymous"></script>';

    echo '<script src="scripts/index.js"></script>';
    echo '</head>';
    echo '<body>';
}

//Ouputs the floating buttons for the page
function outputFloatingButtons($php_file = "none")
{
    // Multidimensional Array link to floating buttons
    $floating_buttons = array(
        array("support.php", "float setting", "fa-solid fa-gear my-float"),
        array("javascript:alertButtonPress()", "float sound", "fa-solid fa-music my-float")
    );

    if ($php_file == "game") {
        echo '<body>';
    } else if ($php_file == "leaderboard") {
        echo '<body onload="createTable()">';
    } else{
        echo '<body onload="checkLoginUi()">';
    }
    echo '<div class="floating-buttons">';

    // Output floating buttons
    echo '<!--Floating Buttons-->';
    for ($x = 0; $x <= count($floating_buttons); $x++) {
        echo '<a href="' . $floating_buttons[$x][0] . '" class="' . $floating_buttons[$x][1] . '">
    <i class="' . $floating_buttons[$x][2] . '"></i>
  </a>';
    }
    echo '</div>';
}

//Ouputs the hero class for the page and navigation banner
function outputHeroAndNavigationBanner(int $video_number = null)
{
    echo '<div class="hero one">';

    backgroundYoutubeEmbedded($video_number);

    echo '<nav>';

    // Outputs Game's Logo and Name
    echo '<!--Output Game\'s Logo and Name-->';
    echo '<div class="logo">';
    echo '<a href="index.php"';
    echo '><img src="assets/images/logo.png" alt="logo" class="rotating"/></a>';
    echo '<span id="user-name-display"></span>';
    echo '</div>';
    echo '<ul>';

    // Associative Arrays link to page links
    $page_links = array("HOME" => "index.php", "EXPLORE" => 'explore.php', "LEADERBOARD" => "leaderboard.php", "SUPPORT" => "support.php");


    // Output Page Links
    echo '<!--Output Page Links-->';
    foreach ($page_links as $key => $value) {
        echo '<li><a href="' . $value . '">' . $key . '</a></li>';
    }

    echo '</ul>';
    echo '<ul>';

    // Multidimensional Arrays links to Login and Language Links
    $login_and_language_links = array(
        array("fa-solid fa-user", "login.php", "", "login_ui"),
        array("fa-solid fa-globe", "javascript:alertButtonPress()", "EN", "language_ui")
    );

    // Output Login and Change Language Links
    echo '<!--Output Login and Change Language Links-->';
    for ($x = 0; $x <= count($login_and_language_links); $x++) {
        echo '<li>';
        echo '<a class="' . $login_and_language_links[$x][0] . '" href="' . $login_and_language_links[$x][1] . '"></a>';
        echo '<a id="' . $login_and_language_links[$x][3] . '" href="' . $login_and_language_links[$x][1] . '">' . $login_and_language_links[$x][2] . '</a>';
        echo '</li>';
    }
    echo '</ul>';
    echo '</nav>';
}

// Output opening main tag and first section
function outputOpenMainTagAndFirstSection(int $video_number, string $section_name)
{
    echo '<!--Output opening main tag and first section-->';
    echo '<main>';
    echo '<section id="' . $section_name . '" name="' . $section_name . '" class="two">';

    backgroundYoutubeEmbedded($video_number);
}

// Output Footer for the page
function outputFooter(string $php_file = "none")
{
    echo '<!--Output Footer for the page-->';
    echo '<footer>';

    // Index Arrays links to header names
    $column_names = array("follow", "columns", "copyright");

    // Output Follow Section
    echo '<!--Output Follow Section-->';
    echo '<div class="' . $column_names[0] . '">';
    echo '<h3>FOLLOW SPACE FRENZY DEVELOPER ONLINE</h3>';
    echo '<div class="social-icons">';

    // Associative Arrays links to social medias
    $social_icons = array("fa-brands fa-facebook" => "https://facebook.com", "fa-brands fa-twitter" => "https://twitter.com", "fa-brands fa-instagram" => "https://instagram.com", "fa-brands fa-github" => "https://github.com");

    // Output Social Medias Icons and Links
    echo '<!--Output Social Medias Icons and Links-->';
    foreach ($social_icons as $key => $value) {
        echo '<a href="' . $value . '" class="' . $key . '"></a>';
    };
    echo '</div>';
    echo '</div>';

    echo '<div class="' . $column_names[1] . '">';

    // Arrays link to different sections of columns
    $col_number = array("col-1", "col-2", "col-3", "col-4");
    $page_links = array("HOME" => "index.php", "EXPLORE" => 'explore.php', "LEADERBOARD" => "leaderboard.php", "SUPPORT" => "support.php");
    $home_links = array("WHAT IS SPACE FRENZY" => "index.php#what-is", "GAMEPLAY VIDEO" => "index.php#gameplay-video");
    $explore_links = array("GAMEMODE SHOWCASE" => "explore.php#gamemode", "HOW TO PLAY" => "explore.php#how-to-play");
    $support_links = array("SETTINGS" => "support.php");

    // Output the different sections of columns
    echo '<!--Output the different sections of columns-->';
    $counter = 0;
    while ($counter <= count($col_number)) {
        switch ($col_number[$counter]) {
            case "col-1":
                echo '<div class="' . $col_number[$counter] . '">';
                echo '<h3>SPACE FRENZY</h3>';
                echo '<ul>';

                foreach ($page_links as $key => $value) {
                    echo '<li><a href="' . $value . '">' . $key . '</a></li>';
                };

                echo '</ul>';
                echo '</div>';
                break;

            case "col-2":
                echo '<div class="' . $col_number[$counter] . '">';
                echo '<h3>Home</h3>';
                echo '<ul>';

                foreach ($home_links as $key => $value) {
                    echo '<li><a href="' . $value . '">' . $key . '</a></li>';
                };

                echo '</ul>';
                echo '</div>';
                break;

            case "col-3":
                echo '<div class="' . $col_number[$counter] . '">';
                echo '<h3>EXPLORE</h3>';
                echo '<ul>';

                foreach ($explore_links as $key => $value) {
                    echo '<li><a href="' . $value . '">' . $key . '</a></li>';
                };

                echo '</ul>';
                echo '</div>';
                break;

            case "col-4":
                echo '<div class="' . $col_number[$counter] . '">';
                echo '<h3>SUPPORT</h3>';
                echo '<ul>';

                foreach ($support_links as $key => $value) {
                    echo '<li><a href="' . $value . '">' . $key . '</a></li>';
                };

                echo '</ul>';
                echo '</div>';
                break;
            default:
                break;
        }
        $counter++;
    }
    echo '</div>';

    # Output copyright section
    echo '<!--Output copyright section-->';
    echo '<div class="copyright">';
    echo '<p>&#169; Copyright ' . date("Y") . ' by Dereck Lam Hon Wah. All Rights Reserved.</p>';
    echo '</div>';
    echo '</footer>';
    // Provide leaderboard functions
    // if ($php_file == "leaderboard") {
    //     echo '<script src="scripts/registration.js"></script>';
    // }
    echo '</body>';
    echo '</html>';
}

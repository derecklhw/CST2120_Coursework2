<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation 
outputHeader('Space Frenzy - Explore', 'explore');
outputFloatingButtons();
outputHeroAndNavigationBanner(10);
?>

<!-- Contents of the page -->

<div class="content">
    <h1>EXPLORE</h1>
    <a onclick="checkUserToPlay()" class="play-here">PLAY FREE</a>
</div>
</div>

<?php
// Output opening main tag and first section
outputOpenMainTagAndFirstSection(4, "gamemode");
?>

<!-- Slider main container -->
<div class="swiper">
    <h3>GAMEMODE SHOWCASE</h3>
    <!-- Wrap the different slides image containers -->
    <div class="swiper-wrapper">
        <!-- Slides Image Containers-->
        <div class="swiper-slide">
            <!-- Slider Image and Text to be displayed -->
            <img src="assets/images/easy-mode.jpg" alt="easy mode" />
            <div class="middle text">
                <h4>EASY MODE</h4>
                <br />
                <p>
                    The player shall kill all the aliens without touching an
                    alien, or else the player dies.
                </p>
                <br />
                <p>
                    Each time the aliens touch the game window walls, they step
                    forward and move toward the player's spaceship.
                </p>
            </div>
        </div>
        <!-- Slider Image and Text to be displayed -->
        <div class="swiper-slide">
            <img src="assets/images/hard-mode.jpg" alt="hard mode" />
            <div class="middle text">
                <h4>HARD MODE</h4>
                <br />
                <p>
                    The player shall kill all the aliens without touching an
                    alien, or else the player dies.
                </p>
                <br />
                <p>
                    Same mechanism as the Beginner level. However, each time the
                    aliens touch the game window walls, they step forward and move
                    toward the player's spaceship at a relatively faster rate.
                </p>
            </div>
        </div>
        <!-- Slider Image and Text to be displayed -->
        <div class="swiper-slide">
            <img src="assets/images/clock-mode.jpg" alt="time mode" />
            <div class="middle text">
                <h4>TIME ATTACK MODE</h4>
                <br />
                <p>
                    The player shall kill all the aliens without touching an
                    alien, or else the player dies.
                </p>
                <br />
                <p>
                    Same mechanism as the Beginner and Normal level. However, the
                    player must kill all the aliens within a set time limit.
                </p>
            </div>
        </div>
    </div>
    <!-- If we need pagination -->
    <div class="swiper-pagination"></div>

    <!-- If we need navigation buttons -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>

</div>
</section>

<!-- Section "How to Play" -->
<section id="how-to-play" name="how-to-play" class="three">

    <!-- Section Background Video -->
    <iframe class="back-video" src="https://www.youtube.com/embed/7ZY6jS-fv4E?controls=0&autoplay=1&mute=1&playsinline=1&playlist=7ZY6jS-fv4E&loop=1"></iframe>

    <h3>HOW TO PLAY</h3>

    <div class="container">
        <div class="instructions">
            <!-- Output Instructions Text -->
            <div class="instructions-text">
                <h4>YOUR FIRST STEP INTO SAVING THE GALAXY</h4>
                <p>
                    Greetings, pilot, and welcome to SPACE FRENZY. I am Aura, your
                    onboard digital assistant.
                </p>
                <p>
                    Deciding your own path among the many opportunities SPACE
                    FRENCZY presents is a grand undertaking, but you are a
                    Capsuleer, after all; your future is without limit, and I am
                    here to provide guidance as you embark on a journey spanning
                    untold lifetimes.
                </p>
                <p>
                    Allow me to brief you on the basics, as you chart your course:
                </p>
            </div>
            <!-- Output Instruction Images for right and left handed users -->
            <div class="instructions-images">
                <figure>
                    <img src="assets/images/instructions-left.png" alt="instructions-left" />
                    <figcaption>Left Handed</figcaption>
                </figure>
                <figure>
                    <img src="assets/images/instructions-right.png" alt="instructions-right" />
                    <figcaption>Right Handed</figcaption>
                </figure>
            </div>
        </div>
        <!-- Output Aura Image -->
        <div class="ai-image">
            <img src="assets/images/how-to-play.png" alt="ai-image" />
        </div>

        <!-- Output play button -->
        <a onclick="checkUserToPlay()">PLAY NOW</a>
    </div>
</section>
</main>

<!-- Script for image slider -->
<script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js"></script>
<script src="scripts/image_slider.js"></script>

<?php
//Output the footer
outputFooter();
?>
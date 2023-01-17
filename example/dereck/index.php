<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Home page');
outputFloatingButtons();
outputHeroAndNavigationBanner(5);
?>

<!-- Contents of the page -->

<div class="content">
    <h1>THE #1 SPACE SHOOTER</h1>
    <a onclick="checkUserToPlay()" class="play-here">PLAY FREE</a>
</div>
</div>

<?php
// Output opening main tag and first section
outputOpenMainTagAndFirstSection(1, "what-is");
?>

<div class="content">
    <h3>WHAT IS SPACE FRENZY?</h3>
    <p>
        SPACE FRENZY is a community-driven space shooter where players can
        play free, choosing their own path from countless options.
    </p>
    <p>
        Experience space exploration, immense PvP and PvE battles and a
        thriving player economy in an ever-expanding sandbox.
    </p>
    <p>
        Participate in many in-game professions and activities, including
        war, politics, piracy, trading, and exploration, across 7,000 star
        systems with hundreds of thousands of other players.
    </p>
</div>

<!-- Output Image which when hover display play buttons -->
<div class="image-container">
    <img src="assets/images/what-is.jpg" alt="space war in space" />
    <div class="middle">
        <a onclick="checkUserToPlay()" class="text">PLAY NOW</a>
    </div>
</div>
</section>

<!-- Section "Gameplay video" -->
<section id="gameplay-video" name="gameplay-video" class="three">
    <!-- <video autoplay muted loop playsinline class="back-video">
        <source src="assets/video/background-video2.mp4" type="video/mp4" />
    </video> -->
    <iframe class="back-video" src="https://www.youtube.com/embed/iL79pGbdvuY?controls=0&autoplay=1&mute=1&playsinline=1&playlist=iL79pGbdvuY&loop=1"></iframe>
    <h3>GAMEPLAY</h3>

    <!-- Container to store demo video -->
    <iframe class="game-play" src="https://www.youtube.com/embed/sPFII3ozSHI">
    </iframe>
</section>
</main>

<?php
//Output the footer
outputFooter();
?>
<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Game', 'game');
outputFloatingButtons('game');
outputHeroAndNavigationBanner(8);
?>

<!-- Contents of the page -->

<div id="game_section">
    <div id="game_container">
        <p id="game_score">
            <span>Score: </span> <span id="scoreElement">0</span>
        </p>
        <canvas id="game_canvas" style="display: none;"></canvas>
        <div id="load" class="screen" style="display: block;">
            Loading, please wait...
        </div>
        <div id="start" class="screen" style="display: none;">
            <button onclick="window.gui.startGame('easy')">Easy</button>
            <button onclick="window.gui.startGame('hard')">Hard</button>
            <button onclick="alertButtonPress('Still in development')">Time Attack</button>
        </div>
        <div id="end" class="screen" style="display: none;">
            <button onclick="window.gui.startGame('easy')">Easy</button>
            <button onclick="window.gui.startGame('hard')">Hard</button>
            <button onclick="alertButtonPress('Still in development')">Time Attack</button>
        </div>
    </div>
</div>
</div>

<?php
//Output the footer
outputFooter('game');
?>
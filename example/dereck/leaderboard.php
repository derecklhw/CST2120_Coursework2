<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Leaderboard', "leaderboard");
outputFloatingButtons("leaderboard");
outputHeroAndNavigationBanner(6);
?>

<!-- Contents of the page -->

<div class="content">
    <h1>LEADERBOARD</h1>
    <a onclick="checkUserToPlay()" class="play-here">PLAY FREE</a>
</div>
</div>

<?php
// Output opening main tag and first section
outputOpenMainTagAndFirstSection(4, "leaderboard");
?>

<h3>LEADERBOARD</h3>

<!-- Output Search filter for leaderboard -->
<input type="text" id="myInput" onkeyup="" placeholder="Search for player.." title="Type in a name" />

<!-- Output Leaderboard -->
<table id="leaderboardTable">
    <!-- <thead>
        <tr>
            <td>#</td>
            <td>Player</td>
            <td>Score</td>
            <td>Time</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td id="winner">1</td>
            <td>
                <i class="fa-solid fa-trophy"></i>
                <p>Dereck Lam</p>
            </td>
            <td>239</td>
            <td>12.54</td>
        </tr>

        <tr>
            <td id="runner-up">2</td>
            <td>
                <i class="fa-solid fa-medal"></i>
                <p>Ashfaaq Hobass</p>
            </td>
            <td>209</td>
            <td>10.2</td>
        </tr>

        <tr>
            <td id="second-runner-up">3</td>
            <td>
                <i class="fa-solid fa-award"></i>
                <p>Cheitraj Shavi</p>
            </td>
            <td>154</td>
            <td>8.4</td>
        </tr>

        <tr>
            <td>4</td>
            <td>
                <i class="fa-solid fa-user"></i>
                <p>Tanvi Maunick</p>
            </td>
            <td>100</td>
            <td>3.1</td>
        </tr>

        <tr>
            <td>5</td>
            <td>
                <i class="fa-solid fa-user"></i>
                <p>Noorani Joomun</p>
            </td>
            <td>82</td>
            <td>2.0</td>
        </tr>
    </tbody> -->

</table>
</section>
</main>

<?php
//Output the footer
outputFooter("leaderboard");
?>
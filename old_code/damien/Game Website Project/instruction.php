<!-- Start of the Html page by calling php function  -->
<?php
    //Include the PHP functions to be used on the page 
    include("D:\www\common\PHP\commun.php"); 

    html_start("instruction");
    header_menu();

?>

<!-- Start containt of main body -->
<div class="instruction">
    <h1>Purpose of the game</h1>
    <div class="text_box">
        <p> The Clicker is what we can call a clicker game like, the objective of the game 
            is to get as many points as possible to get on the top of the leaderboard. Some
             bonus will be able to be bought to help you gather as many click possible such has
              auto-clicker, multiplicator bonus. But be careful, some difficulties will be 
              on your way to be the leader of the leaderboard, some enemy may stop your 
              adventure if you let them go.

        </p>
    </div>
    <h1> How to play</h1>
    <div class="how_to_play_box">
        <p> To play the clicker, the gameplay is quite simple, to gather
            point it is only needed to click on the button in the middle 
            of screen. With your points you can buy different bonus on 
            the right of the screen. You will need to click on the different 
            enemy to kill them before they kill you, multiple click may be need
            this strong ennemy.

        </p>
    </div>  
    <div>
        <img src="common\image\game_screeshot_resize.jpg" alt="Game exemple"> 
    </div>    
</div>

<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>
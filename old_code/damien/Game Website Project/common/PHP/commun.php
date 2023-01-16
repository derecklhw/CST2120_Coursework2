<?php



function html_start($title){
    echo '
    <!DOCTYPE html>
    <html>
        <head>
            <link href="common\CSS\designe.css" type="text/css" rel="stylesheet">
            <title>' . $title . '</title>
        </head>';

    if($title == "login"){
        echo'    <body class="login">';
    }

    if($title == "leaderboard"){
        echo'   <body class="body_background" onload="welcoming_text(),leaderboard_fill(1)">';
    }
    if($title == "game"){
        echo'   <body class="body_background" onload="welcoming_text(),leaderboard_fill(0)">
                <script src="lib/jquery-3.3.1.min.js"></script>
                <script async src="game.js" type="text/javascript"></script>';
    }
    if($title == "instruction"){
        echo'   <body class="body_background" onload="welcoming_text()">';
    }
    
    echo'   <script src="common\JS\commun.js"></script>';

}

function header_menu(){
    $address = array("'game.php'","'leaderboard.php'","'instruction.php'");
    $name = array("Game","Leaderboard","Rules");


    echo'
        <div class="header" contextmenu="mymenu">
            <ul>
            <li class="logo_image"><img src="common\image\Button-PNG-Image-with-Transparent-Background.png" alt="Game logo" height="40" width="40"></li>';
        for ($i=0; $i < count($address); $i++){
            echo'        <li class="center_button"><button class="header_bt" onclick="window.location.href=' . $address[$i]. '">' .$name[$i]. '</button></li>';
        }
    echo'        <li class="welcoming_text">Welcome <span id="Welcome"></span></li>
            </ul>
        </div>
    
    ';
}

function footer(){
    $address = array("index.php","game.php","leaderboard.php","instruction.php");
    $name = array("Login","Game","Leaderboard","Rules");
    echo '
        <div class="footer">
            <div class="footer_left">
                <ul style="list-style-type:none">';
                for ($i=0; $i < count($address); $i++){
                    echo' <li class="footer_bt"><a href="' .$address[$i]. '">' .$name[$i]. '</a></li>';
                }
                echo'</ul>
            </div>
            
            <div class="footer_right">
                <ul style="list-style-type:none">
                    <li>Develloped by Damien Maujean</li>
                    <li><a href="https://www.linkedin.com/in/damien-maujean-470a3323b/">Linkedin</a></li>
                    <li><a href="https://github.com/DamienMauj">GitHub</a></li>
                </ul>
            </div>

        </div>
        
    </body>
</html>
    ';
}

?>
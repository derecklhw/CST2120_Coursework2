<!-- Start of the Html page by calling php function  -->
<?php
    //Include the PHP functions to be used on the page 
    include("D:\www\common\PHP\commun.php"); 

    html_start("leaderboard");
    header_menu();

?>


<!-- Start content of main body -->
<div class="leaderboard_table">
    <table class="table_element">
        <thead>
        <tr>
            <th>Email</th>
            <th>Points(click)</th>
            <th>User Click</th>
            <th>Autoclick Rate</th>
            <th>Total Bonus</th>
        </tr>
        </thead>
        <tbody id="leaderboard_data">
        <tbody>
    </table>
</div>

<!-- Start of the footer and end of HTML -->
<?php
    footer();
?>
<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Support', 'support');
outputFloatingButtons();
outputHeroAndNavigationBanner(3);
?>

<!-- Contents of the page -->

<div class="support-container">
    <h3 class="change-password-heading">Change Password</h3>

    <!-- Change Password Form -->
    <form class="change-password-form">
        <label for="current">Current:</label>
        <input type="password" id="current" name="current" />
        <label for="new">New:</label>
        <input type="password" id="new" name="new" />
        <label for="retype">Retype:</label>
        <input type="password" id="retype" name="retype" />
        <p class="strong-password-message">
            Use 8 or more characters with a mix of letters, numbers & symbols
        </p>
        <input type="button" class="save-button" value="SAVE" onclick="submitSupport()">
        <input type="button" class="cancel-button" value="CANCEL" onclick="location.href = 'index.php'">
    </form>
</div>
</div>

<?php
//Output the footer
outputFooter();
?>
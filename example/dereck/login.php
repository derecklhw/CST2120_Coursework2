<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Login', "login");
outputFloatingButtons();
outputHeroAndNavigationBanner(2);
?>

<!-- Contents of the page -->

<div class="login-container">
    <h3 class="login-welcome">Welcome Back</h3>
    <p>
        Not a member?

        <!-- link to redirect to register page -->
        <a class="registration" href="register.php">Register</a>
    </p>

    <!-- Login Form -->
    <form class="login-form">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" onfocus="resetError()" />
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" onfocus="resetError()" />
    </form>
    <!-- Login Button Section-->
    <div class=" login-button-section">
        <button type="submit" id="login-button">
            <i onclick="submitLogin()" class="fa-solid fa-right-to-bracket fa-beat fa-5x"></i>
        </button>
        <p id="login-error-msg"></p>
    </div>
</div>
</div>

<?php
//Output the footer
outputFooter();
?>
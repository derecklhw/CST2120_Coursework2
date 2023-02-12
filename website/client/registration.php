<?php
include "common.php";
outputHead("Fruity Shop - Registration", "styles/registration.css", "registration.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<!-- Sign up section -->
<div class="signup-section">
    <h1>Registration</h1>
    <!-- Sign up form entries -->
    <form id="form" action="">
        <div class="input-control">
            <label for="firstName">First Name</label>
            <input id="firstName" name="first-name" type="text" />
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="lastName">Last Name</label>
            <input id="lastName" name="last-name" type="text" />
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="email">Email</label>
            <input id="email" name="email" type="text" />
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="password">Password</label>
            <input id="password" name="password" type="password" />
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="Retypepassword"> Retype Password</label>
            <input id="Retypepassword" name="retype-password" type="password" />
            <div class="error"></div>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <!-- Login redirection -->
    <p class="login-link">
        Already Have An Account? <a href="login.php">Login here</a>
    </p>

    <!-- Dialog design and content-->
    <div class="dialog-section">
        <div id="confirmation-dialog" title="Registration Confirmation">
            <p>Are you sure you want to register?</p>
        </div>
        <div id="success-dialog" title="Registration Success">
            <p>Registration successful!</p>
        </div>
        <div id="error-dialog" title="Registration Error">
            <p>Registration failed!</p>
        </div>
    </div>
</div>


</div>

<main></main>

<?php
outputFooter();
?>
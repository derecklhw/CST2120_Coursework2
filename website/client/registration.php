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
    <form id="form" action="/">
        <div class="input-control">
            <label for="Firstname">First Name</label>
            <input id="Firstname" name="First Name" type="text" />
            <div class="error"></div>
        </div>
        <div class="input-control">
            <label for="Lastname">Last Name</label>
            <input id="Lastname" name="Last name" type="text" />
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
            <input id="Retypepassword" name="password2" type="password" />
            <div class="error"></div>
        </div>
        <button type="submit">Sign Up</button>
    </form>
    <p class="login-link">
        Already Have An Account? <a href="login.php">Login here</a>
    </p>
</div>


</div>

<main></main>

<?php
outputFooter();
?>
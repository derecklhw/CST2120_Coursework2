<?php
include "common.php";
outputHead("Fruity Shop - Login", "styles/login.css", "login.js");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>
<!-- Login Section -->
<div class="login-section">
    <h1>Login</h1>
    <!-- Login form fields-->
    <form id="form" action="">
        <div class="entry">
            <label for="email">Email</label>
            <input id="email" type="email" required />
        </div>
        <div class="entry">
            <label for="password">Password</label>
            <input id="password" type="password" required />
        </div>
        <div class="forget-password">Forgot Password?</div>
        <input id="submit-btn" value="Login" />
        <div class="signup_link">
            Not a member?<a href="registration.php"> Signup</a>
        </div>
    </form>
</div>
</div>
<?php
outputFooter();
?>
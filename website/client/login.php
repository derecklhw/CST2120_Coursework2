<?php
include "common.php";
outputHead("Fruity Shop - Login", "styles/login.css");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>
<!-- Login Section -->
<div class="login-section">
    <h1>Login</h1>
    <!-- Login form fields-->
    <form method="">
        <div class="entry">
            <label>Email</label>
            <input type="email" required />
        </div>
        <div class="entry">
            <label>Password</label>
            <input type="password" required />
        </div>
        <div class="forget-password">Forgot Password?</div>
        <input type="submit" value="Login" />
        <div class="signup_link">
            Not a member?<a href="registration.html"> Signup</a>
        </div>
    </form>
</div>
</div>
<?php
outputFooter();
?>
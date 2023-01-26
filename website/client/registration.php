<?php
include "common.php";
outputHead("Fruity Shop - Registration", "styles/registration.css");
outputOpeningBodyAndHeroClass(1);
outputNavbar();
?>

<!-- Sign up section -->
<div class="signup-section">
    <h1>Sign up</h1>
    <!-- Sign up form entries -->
    <form>
        <div class="entry">
            <label>First Name</label>
            <input type="text" placeholder="" />
        </div>
        <div class="entry">
            <label>Last Name</label>
            <input type="text" placeholder="" />
        </div>
        <div class="entry">
            <label>Email</label>
            <input type="email" placeholder="" />
        </div>
        <div class="entry">
            <label>Password</label>
            <input type="password" placeholder="" />
        </div>
        <div class="entry">
            <label>Re-type Password</label>
            <input type="password" placeholder="" />
        </div>
        <input type="button" value="Submit" />
    </form>
    <p>
        By clicking the Sign Up button,you agree to our<br />
        <a href="#">Terms and Condition</a> and <a href="#">Policy Privacy</a>
    </p>
    <p class="para-2">
        Already Have An Account? <a href="#">Login here</a>
    </p>
</div>
</div>

<main></main>

<?php
outputFooter();
?>
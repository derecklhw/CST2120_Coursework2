<?php
//Include the PHP functions to be used on the page 
include 'common.php';

//Output header, floating buttons and navigation
outputHeader('Space Frenzy - Register', 'register');
outputFloatingButtons();
outputHeroAndNavigationBanner(8);
?>

<!-- Contents of the page -->

<div class="register-container">
    <h3 class="register-welcome">GETTING STARTED</h3>
    <p>
        Already have an account?
        <!-- Link to redirect to login page -->
        <a class="login-link" href="login.php">Log In</a>
    </p>

    <!-- Registration Form -->
    <form class="registration-form" id="registration-form">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" onkeyup="registrationCheckUsername()" />
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" onkeyup="registrationCheckEmail()" />
        <label for="gender">Gender</label>
        <select name="gender" id="gender">
            <option value="male">Male</option>
            <option value="female">Female</option>
        </select>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" onkeyup="registrationCheckPassword()" />
        <label for="retype-password">Re-type Password:</label>
        <input type="password" id="retype-password" name="retype-password" onkeyup="registrationCheckRetypePassword()" />

        <div class="registration-validation-section">
            <i class="fa-solid fa-xmark" id="username-check-icon"></i>
            <p id="username-check">A username consists of 6-10 characters and contain only alphanumeric characters and underscore.</p>
            <i class="fa-solid fa-xmark" id="email-check-icon"></i>
            <p id="email-check">A valid email address is a string seperated into two parts by @ symbol, a "personal_info" and a domain.</p>
            <i class="fa-solid fa-xmark" id="password-check-icon"></i>
            <p id="password-check">A valid password should have at least one number, one uppercase and lowercase character, one special symbol and be between 6-20 characters long.</p>
            <i class="fa-solid fa-xmark" id="password-match-check-icon"></i>
            <p id="password-match-check">Retype Password should match Password entered.</p>
        </div>

        <!-- Checkbox to check if user agrees to terms and conditions -->
        <input type="checkbox" id="terms-conditions" name="terms-conditions" value="false" onclick="acceptTermsChangeValue()"/>
        <label for="terms-conditions" class="align-text-center">
            I agree with the terms and conditions.</label>

        <input type="button" class="save-button" value="SAVE" onclick="submitRegistration()">
        <input type="button" class="cancel-button" value="CANCEL" onclick="location.href = 'index.php'">
    </form>
</div>
</div>

<?php
//Output the footer
outputFooter();
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <!-- <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" /> -->
    <link href="styles/login.css" rel="stylesheet" type="text/css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <script async src="scripts\login.js" type="text/javascript"></script>
    <title>CMS - Login</title>
</head>

<body>

    <div>
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
                <input id="submit-btn" value="Login" />
            </form>
        </div>
        <div class="dialog-section">
            <div id="success-dialog" title="Login Success">
                <p>Login successful!</p>
            </div>
            <div id="error-dialog" title="Login Error">
                <p>Incorrect email or password!</p>
                <button class="popup_button" id="closeDialog" onclick="$('#error-dialog').dialog('close');">Close</button>
            </div>
            <div id="error-dialog-unauthorized" title="unauthorized">
                <p>unauthorized User!</p>
                <button class="popup_button" id="closeDialog" onclick="$('#error-dialog-unauthorized').dialog('close');">Close</button>
            </div>
        </div>
    </div>

</body>

</html>
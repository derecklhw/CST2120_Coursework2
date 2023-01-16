<!-- Start of the Html page by calling php function  -->
<?php
    //Include the PHP functions to be used on the page 
    include("D:\www\common\PHP\commun.php");
    html_start("login");
?>
<!-- 
<script src="login.js"></script> -->

<!-- Start containt of main body -->
<div class="login_box">
	<div>
		<div class="login_welcoming">
			<div><h1>Welcome<h1></div>
			<div><h1>to<h1></div>
			<div><h1>The Clicker<h1></div>
		</div>
		<div>
			<form id="form">
				<div class="input_batch">
					<div>email</div>
					<input type="email" class="form-control" id="email">
					<div id="interactive_login_email"></div>
				</div>
				<div class="input_batch">
					<div>password</div>
					<input type="password" class="form-control" id="psw">
					<div id="interactive_login_password"></div>
				</div>
				<div>

					<div class="button" id="button-2" onclick="Login()">
						<div id="slide"></div>
						<a href="instruction.php" onclick = "Login()">Login</a>
					</div>
					<div class="button" id="button-2" onclick="Register()">
						<div id="slide"></div>
						<a href="instruction.php">Register</a>
					</div>
				</div>
			</form>
		</div>
		
	</div>
</div>


</body>
</html>
<!-- end of HTML -->
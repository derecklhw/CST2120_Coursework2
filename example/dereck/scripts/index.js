function alertButtonPress(text="Clicked") {
  window.alert(text);
}

function checkUserToPlay() {
  if (sessionStorage.loggedInUserEmail !== undefined) {
    window.location.href = "game.php";
  } else {
    window.location.href = "login.php";
  }
}

function checkLoginUi() {
  let userNameDisplay = document.getElementById("user-name-display");
  let loginUi = document.getElementById("login_ui");
  if (sessionStorage.loggedInUserEmail !== undefined) {
    let userLogInObject = JSON.parse(localStorage[sessionStorage.loggedInUserEmail])
    userNameDisplay.innerHTML = userLogInObject.username;
    loginUi.innerHTML = "LOGOUT";
    loginUi.setAttribute("onclick","logout()")
    loginUi.removeAttribute("href")

  } else {
    userNameDisplay.innerHTML = "SPACE FRENZY.";
    loginUi.innerHTML = "LOGIN";
    loginUi.setAttribute("href","login.php")
    loginUi.removeAttribute("onclick")
  }
}

function logout() {
  sessionStorage.removeItem("loggedInUserEmail")
  window.location.href = "index.php"
  console.log("out")
}

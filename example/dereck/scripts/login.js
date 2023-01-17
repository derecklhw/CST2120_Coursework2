function resetError() {
  let errorMsgObj = document.getElementById("login-error-msg");
  errorMsgObj.innerHTML = "";
}

function submitLogin() {
  let errorMsgObj = document.getElementById("login-error-msg");

  let emailObj = document.getElementById("email");
  let passwordObj = document.getElementById("password");
  let emailValue = emailObj.value;
  let passwordValue = passwordObj.value;

  if (emailValue == "" && passwordValue == "") {
    errorMsgObj.innerHTML = "Both Email and Password Missings";
    return;
  } else if (emailValue == "" || passwordValue == "") {
    if (emailValue == "") {
      errorMsgObj.innerHTML = "Email Missing";
      return;
    } else if (passwordValue == "") {
      errorMsgObj.innerHTML = "Password Missing";
      return;
    }
  } else {
    if (localStorage[emailValue] === undefined) {
      errorMsgObj.innerHTML = "Email not recognized. Do you have an account?";
      return;
    } else {
      let userObject = JSON.parse(localStorage[emailValue]);
      let userPassword = userObject.password;
      if (passwordValue === userPassword) {
        sessionStorage.loggedInUserEmail = userObject.email;
        window.alert(`${userObject.username} successdully login`);
        window.location.href = "explore.php";
        return;
      } else {
        errorMsgObj.innerHTML = "Password is incorrect. Please try again.";
        return;
      }
    }
  }
}

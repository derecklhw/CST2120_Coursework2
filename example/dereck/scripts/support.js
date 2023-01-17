function submitSupport() {
  if (sessionStorage.loggedInUserEmail !== undefined) {
    let currentPassoword = document.getElementById("current");
    let newPassword = document.getElementById("new");
    let retypePassword = document.getElementById("retype");
    if (
      currentPassoword.value == "" &&
      newPassword.value == "" &&
      retypePassword.value == ""
    ) {
      window.alert("Current, new and retype passoword fields empty");
    } else if (
      currentPassoword.value == "" ||
      newPassword.value == "" ||
      retypePassword.value == ""
    ) {
      window.alert("Some values are missing");
    } else {
      let userObject = JSON.parse(
        localStorage[sessionStorage.loggedInUserEmail]
      );
      if (userObject.password == currentPassoword.value) {
        if (newPassword.value != userObject.password) {
          if (newPassword.value == retypePassword.value) {
            let regex = new RegExp(
              "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!#%*?&]{6,20}$"
            );
            if (!regex.test(newPassword.value)) {
              window.alert("Password not powerful enought");
            } else {
              userObject.password = newPassword.value;
              localStorage.setItem(
                sessionStorage.loggedInUserEmail,
                JSON.stringify(userObject)
              );
              window.alert("Password changed");
              window.location.href = "explore.php";
            }
          } else {
            window.alert("New Password doesn't match retype password");
          }
        } else {
            window.alert("New Password cannot be same as new password");
        }
      } else {
        window.alert("Current Password doesn't match");
      }
    }
  } else {
    window.alert("Login First");
    window.location.href = "login.php";
  }
}

let validIcon = "fa-check";
let validColor = "#006600";
let notValidIcon = "fa-xmark";
let notValidColor = "#660000";

function reinitiateCheckIconAndText() {
  let usernameCheckIcon = document.getElementById("username-check-icon");
  let usernameCheckText = document.getElementById("username-check");
  let emailCheckIcon = document.getElementById("email-check-icon");
  let emailCheckText = document.getElementById("email-check");
  let passwordCheckIcon = document.getElementById("password-check-icon");
  let passwordCheckText = document.getElementById("password-check");
  let retypePasswordCheckIcon = document.getElementById(
    "password-match-check-icon"
  );
  let retypePasswordCheckText = document.getElementById("password-match-check");
  changeCheckIconAndText(
    usernameCheckIcon,
    usernameCheckText,
    notValidIcon,
    notValidColor,
    "A username consists of 6-10 characters and contain only alphanumeric characters and underscore."
  );
  changeCheckIconAndText(
    emailCheckIcon,
    emailCheckText,
    notValidIcon,
    notValidColor,
    'A valid email address is a string seperated into two parts by @ symbol, a "personal_info" and a domain.'
  );
  changeCheckIconAndText(
    passwordCheckIcon,
    passwordCheckText,
    notValidIcon,
    notValidColor,
    "A valid password should have at least one number, one uppercase and lowercase character, one special symbol and be between 6-20 characters long."
  );
  changeCheckIconAndText(
    retypePasswordCheckIcon,
    retypePasswordCheckText,
    notValidIcon,
    notValidColor,
    "Retype Password should match Password entered."
  );
}

function changeCheckIconAndText(objIcon, objText, icon, color, message) {
  let checkIcon = objIcon;
  let checkText = objText;
  checkIcon.className = `fa-solid ${icon}`;
  checkIcon.setAttribute("style", `color: ${color}`);
  checkText.innerHTML = message;
  checkText.setAttribute("style", `color: ${color}`);
}

function regExpressionCheckValue(
  value,
  regExp,
  icon,
  text,
  errorMsg,
  validMsg
) {
  let entry = document.getElementById(value);
  let regex = new RegExp(regExp);
  let checkIcon = document.getElementById(icon);
  let checkText = document.getElementById(text);

  if (!regex.test(entry.value)) {
    changeCheckIconAndText(
      checkIcon,
      checkText,
      notValidIcon,
      notValidColor,
      errorMsg
    );

    return false;
  } else {
    changeCheckIconAndText(
      checkIcon,
      checkText,
      validIcon,
      validColor,
      validMsg
    );

    return true;
  }
}

function registrationCheckUsername() {
  if (
    regExpressionCheckValue(
      "username",
      "^[a-zA-Z0-9_]{6,10}$",
      "username-check-icon",
      "username-check",
      "A username consists of 6-10 characters and contain only alphanumeric characters and underscore.",
      "Valid username entered."
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function registrationCheckEmail() {
  if (
    regExpressionCheckValue(
      "email",
      "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+.[A-Z|a-z]{2,}",
      "email-check-icon",
      "email-check",
      'A valid email address is a string seperated into two parts by @ symbol, a "personal_info" and a domain.',
      "Valid email address entered."
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function registrationCheckPassword() {
  if (
    regExpressionCheckValue(
      "password",
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*#?&])[A-Za-z\\d@$!#%*?&]{6,20}$",
      "password-check-icon",
      "password-check",
      "A valid password should have at least one number, one uppercase and lowercase character, one special symbol and be between 6-20 characters long.",
      "Valid password entered."
    )
  ) {
    return true;
  } else {
    return false;
  }
}

function registrationCheckRetypePassword() {
  let password = document.getElementById("password");
  let retypePassword = document.getElementById("retype-password");
  let retypePasswordCheckIcon = document.getElementById(
    "password-match-check-icon"
  );
  let retypePasswordCheck = document.getElementById("password-match-check");

  if (registrationCheckPassword()) {
    if (password.value === retypePassword.value) {
      changeCheckIconAndText(
        retypePasswordCheckIcon,
        retypePasswordCheck,
        validIcon,
        validColor,
        "Valid matched password entered."
      );
      return true;
    } else {
      changeCheckIconAndText(
        retypePasswordCheckIcon,
        retypePasswordCheck,
        notValidIcon,
        notValidColor,
        "Password entered does not match."
      );
      return false;
    }
  } else {
    changeCheckIconAndText(
      retypePasswordCheckIcon,
      retypePasswordCheck,
      notValidIcon,
      notValidColor,
      "No valid password entered."
    );
    return false;
  }
}

function acceptTermsChangeValue() {
  let acceptCondition = document.getElementById("terms-conditions");
  if (acceptCondition.value == "false") {
    acceptCondition.setAttribute("value", "true");
  } else {
    acceptCondition.setAttribute("value", "false");
  }
}

function storeUser(username, email, gender, password, acceptCondition) {
  if (localStorage[email] === undefined) {
    let usrObject = {};
    usrObject.username = username;
    usrObject.email = email;
    usrObject.gender = gender;
    usrObject.password = password;
    usrObject.acceptCondition = acceptCondition;
    usrObject.score = 0;
    usrObject.time = 0;

    localStorage[usrObject.email] = JSON.stringify(usrObject);
    return "Successful Registration";
  } else {
    return "User already exists";
  }
}

function submitRegistration() {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let gender = document.getElementById("gender");
  let password = document.getElementById("password");
  let retypePassword = document.getElementById("retype-password");
  let acceptCondition = document.getElementById("terms-conditions");
  let objValues = [username, email, password, retypePassword];

  if (
    registrationCheckUsername() &&
    registrationCheckEmail() &&
    registrationCheckPassword() &&
    registrationCheckRetypePassword() &&
    acceptCondition.value == "true"
  ) {
    let storeUserMessage = storeUser(
      username.value,
      email.value,
      gender.value,
      password.value,
      acceptCondition.value
    );
    window.alert(storeUserMessage);
    objValues.forEach((value) => {
      value.value = "";
    });
    acceptCondition.checked = false;
    acceptCondition.setAttribute("value", "false");
    reinitiateCheckIconAndText();
  } else {
    window.alert("Failed");
  }
}

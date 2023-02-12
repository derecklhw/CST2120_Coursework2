let phpFilePath = "scripts/php/";

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const validateInputs = (
  firstNameValue,
  lastNameValue,
  emailValue,
  passwordValue,
  retypePasswordValue
) => {
  let validation = {
    firstname: false,
    lastname: false,
    email: false,
    password: false,
    retypepassword: false,
  };

  if (firstNameValue === "") {
    setError(firstName, "First name is required");
    validation.firstname = false;
  } else {
    setSuccess(firstName);
    validation.firstname = true;
  }

  if (lastNameValue === "") {
    setError(lastName, "Last name is required");
    validation.lastname = false;
  } else {
    setSuccess(lastName);
    validation.lastname = true;
  }

  if (emailValue === "") {
    setError(email, "Email is required");
    validation.email = false;
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
    validation.email = false;
  } else {
    setSuccess(email);
    validation.email = true;
  }

  if (passwordValue === "") {
    setError(password, "Password is required");
    validation.password = false;
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
    validation.password = false;
  } else {
    setSuccess(password);
    validation.password = true;
  }

  if (retypePasswordValue === "") {
    setError(Retypepassword, "Please confirm your password");
    validation.retypepassword = false;
  } else if (retypePasswordValue !== passwordValue) {
    setError(Retypepassword, "Passwords doesn't match");
    validation.retypepassword = false;
  } else {
    setSuccess(Retypepassword);
    validation.retypepassword = true;
  }

  if (
    validation.firstname &&
    validation.lastname &&
    validation.email &&
    validation.password &&
    validation.retypepassword
  ) {
    $("#confirmation-dialog").dialog("open");
  } else {
  }
};

const recordUser = () => {
  let firstNameValue = $("#firstName").val();
  let lastNameValue = $("#lastName").val();
  let emailValue = $("#email").val();
  let passwordValue = $("#password").val();

  $.ajax({
    url: phpFilePath + "post.php",
    type: "POST",
    data: {
      post: "recordUser",
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue,
      password: passwordValue,
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#success-dialog").dialog("open");
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $("#error-dialog").dialog("open");
      }
    },
  });
};

$(function () {
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const retypepassword = document.getElementById("Retypepassword");

  $("#form").on("click", "button", function (event) {
    const firstNameValue = firstName.value.trim();
    const lastNameValue = lastName.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const retypePasswordValue = retypepassword.value.trim();

    event.preventDefault();
    validateInputs(
      firstNameValue,
      lastNameValue,
      emailValue,
      passwordValue,
      retypePasswordValue
    );
  });

  $("#confirmation-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Confirm: function () {
        $(this).dialog("close");
        recordUser();
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
    show: {
      duration: 800,
    },
    hide: {
      duration: 800,
    },
  });
  $("#success-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Confirm: function () {
        $(this).dialog("close");
        window.location.href = "login.php";
      },
    },
    show: {
      duration: 800,
    },
    hide: {
      duration: 800,
    },
  });
  $("#error-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Confirm: function () {
        $(this).dialog("close");
      },
    },
    show: {
      duration: 800,
    },
    hide: {
      duration: 800,
    },
  });
});

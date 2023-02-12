$(function () {
  const form = document.getElementById("form");
  const Firstname = document.getElementById("Firstname");
  const Lastname = document.getElementById("Lastname");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  const Retypepassword = document.getElementById("Retypepassword");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    validateInputs();
  });

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

  const validateInputs = () => {
    const FirstnameValue = Firstname.value.trim();
    const LastnameValue = Lastname.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const RetypepasswordValue = Retypepassword.value.trim();

    if (FirstnameValue === "") {
      setError(Firstname, "First name is required");
    } else {
      setSuccess(Firstname);
    }
    if (LastnameValue === "") {
      setError(Lastname, "Last name is required");
    } else {
      setSuccess(Lastname);
    }
    if (emailValue === "") {
      setError(email, "Email is required");
    } else if (!isValidEmail(emailValue)) {
      setError(email, "Provide a valid email address");
    } else {
      setSuccess(email);
    }

    if (passwordValue === "") {
      setError(password, "Password is required");
    } else if (passwordValue.length < 8) {
      setError(password, "Password must be at least 8 character.");
    } else {
      setSuccess(password);
    }

    if (RetypepasswordValue === "") {
      setError(Retypepassword, "Please confirm your password");
    } else if (RetypepasswordValue !== passwordValue) {
      setError(Retypepassword, "Passwords doesn't match");
    } else {
      setSuccess(Retypepassword);
    }
  };
});

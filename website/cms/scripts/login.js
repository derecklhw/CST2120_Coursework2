// Set the path to the php folder
let phpFilePath = 'php';

$(function () {
  // button with submit-btn id is clicked
  $("#form").on("click", "#submit-btn", function () {
    // get the values from the input fields
    let email = $("#email").val();
    let password = $("#password").val();
    // create an object with the values
    let data = {
      info: "login",
      email: email,
      password: password,
    };
    // send the object to the post.php file
    $.ajax({
      url: phpFilePath + "/post.php",
      type: "POST",
      data: data,
      // if the request is successful
      success: function (responseTxt) {
        // if the login is successful
        if (responseTxt == "Login Successful") {
          window.location.href = "cms.php";
        // if the login is not successful
        } else if (
          responseTxt == "Incorrect Password" ||
          responseTxt == "Email does not exist"
        ) {
          // show the error dialog
          $("#error-dialog").dialog("open");
          $("#email").val("");
          $("#password").val("");
        // if the user is not authorized
        } else if (responseTxt == "Unauthorized") {
          console.log(responseTxt);
          $("#error-dialog-unauthorized").dialog("open");
          $("#email").val("");
          $("#password").val("");
        }
      },
    });
    return
  });

  // stting ip error dialog box
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
  // setting unauthorized error dialog box
  $("#error-dialog-unauthorized").dialog({
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
// setting success dialog box
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


});
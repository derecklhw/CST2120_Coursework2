let phpFilePath = "php";
$(function () {
  $("#form").on("click", "#submit-btn", function () {
    let email = $("#email").val();
    let password = $("#password").val();
    let data = {
      info: "login",
      email: email,
      password: password,
    };
    $.ajax({
      url: phpFilePath + "/post.php",
      type: "POST",
      data: data,
      success: function (responseTxt) {
        if (responseTxt == "Login Successful") {
          window.location.href = "cms.php";
        } else if (
          responseTxt == "Incorrect Password" ||
          responseTxt == "Email does not exist"
        ) {
          $("#error-dialog").dialog("open");
          $("#email").val("");
          $("#password").val("");
        } else if (responseTxt == "Unauthorized") {
          console.log(responseTxt);
          $("#error-dialog-unauthorized").dialog("open");
          $("#email").val("");
          $("#password").val("");
        }
      },
    });
    return;
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

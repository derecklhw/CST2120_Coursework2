let phpFilePath = "scripts/php/";

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
      url: phpFilePath + "post.php",
      type: "POST",
      data: data,
      success: function (responseTxt) {
        if (responseTxt == "Login Successful") {
          $("#success-dialog").dialog("open");
        } else if (
          responseTxt == "Incorrect Password" ||
          responseTxt == "Email does not exist"
        ) {
          $("#error-dialog").dialog("open");
          $("#email").val("");
          $("#password").val("");
        }
      },
    });
    return
  });
  $("#success-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Confirm: function () {
        $(this).dialog("close");
        window.location.href = "index.php";
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

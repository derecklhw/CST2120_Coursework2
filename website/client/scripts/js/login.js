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
        console.log(responseTxt);
      },
    });
  });
});

phpFilePath = "scripts/php/";

function loggedOut() {
  $.ajax({
    url: phpFilePath + "get.php",
    data: { info: "logout" },
    success: function (responseTxt) {
      if (responseTxt == "Logged Out") {
        window.location.href = "index.php";
      } else {
        console.log("Error: " + responseTxt);
      }
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    },
  });
}

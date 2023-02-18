phpFilePath = "scripts/php/";

// function when user logged out to destroy the variable php session storage
function loggedOut() {
  $.ajax({
    url: phpFilePath + "get.php",
    data: { info: "logout" },
    success: function (responseTxt) {
      if (responseTxt == "Logged Out") {
        // clear cart in session storage
        sessionStorage.removeItem("cart");
        // clear search in session storage
        sessionStorage.removeItem("search");
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

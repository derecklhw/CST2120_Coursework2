$(function () {
  $.ajax({
    url: "scripts/php/db.php",
    success: function (response) {
      console.log("Connection to database successfully");
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    },
  });

  $("#featured-products").load("scripts/php/get.php");
});

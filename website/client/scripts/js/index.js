let phpFilePath = "scripts/php/";

function buildCatalogue(sortType) {
  $("#featured-products").load(phpFilePath + "get.php?mode="+sortType);
}

$(function () {
  buildCatalogue('default');

  $.ajax({
    url: phpFilePath + "db.php",
    success: function (response) {
      console.log("Connection to database successfully");
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    },
  });

  $("#sort-format").change(function () {
    let sortType = $(this).val();
    buildCatalogue(sortType);
  });
});

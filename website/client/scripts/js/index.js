let phpFilePath = "scripts/php/";

function buildCatalogue(sortType, search_parameter = "null") {
  $("#featured-products").load(
    phpFilePath +
      "get.php?mode=build_catalogue&format=" +
      sortType +
      "&search_parameter=" +
      search_parameter
  );
}

$(function () {
  buildCatalogue("default");

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

  $("#search-section").on("click", ".fa-magnifying-glass", function (event) {
    event.preventDefault();
    let search_input = $("#search-input").val();
    buildCatalogue("search", search_input);
  });
});

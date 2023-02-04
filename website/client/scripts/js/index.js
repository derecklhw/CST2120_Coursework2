let phpFilePath = "scripts/php/";

function buildCatalogue(modeType, sortType = "null", search_parameter = "null") {
  $("#featured-products").load(
    phpFilePath +
      "get.php?build=catalogue" +
      "&mode=" +
      modeType +
      "&format=" +
      sortType +
      "&search_parameter=" +
      search_parameter,
    function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $(".fa-magnifying-glass").attr({ "pointer-events": "none" });
        $(this).html(
          '<p class="error-message">Greetings Clients <br>If you receive the following error message “Product information not found” when attempting to launch Fruity Shop. <br>If you encounter this error, you may be able to resolve it by contacting the adminstrator</p>'
        );
      }
    }
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
    $("#search-input").val("");
    buildCatalogue("sort",sortType);
  });

  $("#search-section").on("click", ".fa-magnifying-glass", function (event) {
    event.preventDefault();
    let search_input = $("#search-input").val();
    let sortType = $("#sort-format").val();
    buildCatalogue("search", sortType, search_input);
  });

  $("#featured-products").on("click", ".add-to-cart-btn", function (event) {
    let id = $(this).data("id");
    console.log(id);
  });
});

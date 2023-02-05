import { getCart, addToCart, removeToCart } from "./cart.js";

let phpFilePath = "scripts/php/";

function buildCatalogue(
  modeType,
  sortType = "null",
  search_parameter = "null"
) {
  let cart = getCart();
  $.ajax({
    url: phpFilePath + "build.php",
    type: "POST",
    data: {
      build: "catalogue",
      mode: modeType,
      format: sortType,
      search_parameter: search_parameter,
      cart: JSON.stringify(cart),
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#featured-products").html(responseTxt);
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $(".fa-magnifying-glass").attr({ "pointer-events": "none" });
        $(this).html(
          '<p class="error-message">Greetings Clients <br>If you receive the following error message “Product information not found” when attempting to launch Fruity Shop. <br>If you encounter this error, you may be able to resolve it by contacting the adminstrator</p>'
        );
      }
    },
  });
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
    buildCatalogue("sort", sortType);
  });

  $("#search-section").on("click", ".fa-magnifying-glass", function (event) {
    event.preventDefault();
    let search_input = $("#search-input").val();
    let sortType = $("#sort-format").val();
    buildCatalogue("search", sortType, search_input);
  });

  $("#featured-products").on("click", ".add-to-cart-btn", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    addToCart(id);
    $(this).attr("class", "remove-to-cart-btn");
    $(this).html("Remove from cart");
  });

  $("#featured-products").on("click", ".remove-to-cart-btn", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    removeToCart(id);
    $(this).attr("class", "add-to-cart-btn");
    $(this).html("Add to cart");
  });
});

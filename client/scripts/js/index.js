import { getCart, addToCart, removeToCart } from "./cart_functionality.js";

// php filepath
let phpFilePath = "scripts/php/";

// retrieve recommendation based on "search" or "items in cart" for display
function buildRecommendation() {
  let cart = getCart();
  let search = getSearch();

  $.ajax({
    url: phpFilePath + "build.php",
    type: "POST",
    data: {
      build: "recommendation",
      cart: JSON.stringify(cart),
      search: JSON.stringify(search),
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#recommendation-list").html(responseTxt);
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $("#recommendation-list").html(
          '<p class="error-message">Greetings Clients <br>If you receive the following error message “Product information not found” when attempting to launch Fruity Shop. <br>If you encounter this error, you may be able to resolve it by contacting the adminstrator</p>'
        );
      }
    },
  });
}

// retrieve catalogue based on mode, sort and search for display
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
    async: false,
    success: function (responseTxt, statusTxt, xhr) {
      $("#featured-products").html(responseTxt);
      if (search_parameter != "null") {
        let search = getSearch();
        search.push(search_parameter);
        sessionStorage.search = JSON.stringify(search);
      }
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $(".fa-magnifying-glass").attr({ "pointer-events": "none" });
        $("#featured-products").html(
          '<p class="error-message">Greetings Clients <br>If you receive the following error message “Product information not found” when attempting to launch Fruity Shop. <br>If you encounter this error, you may be able to resolve it by contacting the adminstrator</p>'
        );
      }
    },
  });
}

// build catalogue depending on sort or search format
function search_and_sort_functionality(event) {
  event.preventDefault();
  let sortType = $("#sort-format").val();
  let search_input = $("#search-input").val();
  if (search_input == "") {
    buildCatalogue("sort", sortType);
  } else {
    buildCatalogue("search", sortType, search_input);
  }
}

// retrieve search history from html session storage
function getSearch() {
  let search;
  if (sessionStorage.search === undefined || sessionStorage.search === "") {
    search = [];
  } else {
    search = JSON.parse(sessionStorage.search);
  }
  return search;
}

// await the html document finished loading for execusion
$(function () {
  buildRecommendation();
  buildCatalogue("default");

  // test mongodb connection
  $.ajax({
    url: phpFilePath + "db.php",
    success: function (response) {
      console.log("Connection to database successfully");
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    },
  });

  // event handler for sorting button; default, ascending or descending
  $("#sort-format").change(function (event) {
    search_and_sort_functionality(event);
  });

  // event handler for search button
  $("#search-section").on("click", ".fa-magnifying-glass", function (event) {
    search_and_sort_functionality(event);
    buildRecommendation();
  });

  // event handler for add to cart button
  $("#featured-products").on("click", ".add-to-cart-btn", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    addToCart(id);
    $(this).attr("class", "remove-to-cart-btn");
    $(this).html("Remove from cart");
    buildRecommendation();
  });

  // event handler for remove from cart button
  $("#featured-products").on("click", ".remove-to-cart-btn", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    removeToCart(id);
    $(this).attr("class", "add-to-cart-btn");
    $(this).html("Add to cart");
    buildRecommendation();
  });
});

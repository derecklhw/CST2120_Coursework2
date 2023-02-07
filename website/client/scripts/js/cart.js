let phpFilePath = "scripts/php/";

function getCart() {
  let cart;
  if (sessionStorage.cart === undefined || sessionStorage.cart === "") {
    cart = [];
  } else {
    cart = JSON.parse(sessionStorage.cart);
  }
  return cart;
}

function loadCart() {
  let cart = getCart();
  $.ajax({
    url: phpFilePath + "build.php",
    type: "POST",
    data: {
      build: "cart",
      cart: JSON.stringify(cart),
    },
    success: function (responseTxt, statusTxt, xhr) {
      $(".sub-sections").html(responseTxt);
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
    },
  });
}

function addToCart(id) {
  let cart = getCart();
  $.ajax({
    url: "scripts/php/get.php",
    data: { info: "getProductDetails", productId: id },
    success: function (responseTxt) {
      let productObj = JSON.parse(responseTxt);
      cart.push({
        id: id,
        name: productObj["Name"],
        price: productObj["Price"],
        season: productObj["Season"],
        category: productObj["Category"],
        image_link: productObj["Image_link"],
        quantity: 1,
      });
      sessionStorage.cart = JSON.stringify(cart);
    },
    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log("Error: " + errorThrown);
    },
  });
}

function removeToCart(id) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
    }
  }
  sessionStorage.cart = JSON.stringify(cart);
}

function updateCartProductQty(id, quantity) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = quantity;
    }
  }
  sessionStorage.cart = JSON.stringify(cart);
}

$(function () {
  loadCart();

  $(".sub-sections").on("click", ".fa-trash", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    removeToCart(id);
    loadCart();
  });

  $(".sub-sections").on(
    "change",
    ".number-spinner form input",
    function (event) {
      event.preventDefault();
      let quantity = $(this).val();
      let id = $(this).data("id");

      if (quantity == 0) {
        removeToCart(id);
      } else {
        updateCartProductQty(id, quantity);
      }
      loadCart();
    }
  );

  $("#confirmation-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Yes: function () {
        $(this).dialog("close");
        $("#approved-confirmation-dialog").dialog("open");
      },
      No: function () {
        $(this).dialog("close");
      },
    },
    show: {
      duration: 500,
    },
    hide: {
      duration: 500,
    },
  });

  $("#approved-confirmation-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Continue: function () {
        $(this).dialog("close");
        window.location.href = "index.php#catalogue";
      },
    },
    show: {
      duration: 800,
    },
    hide: {
      duration: 800,
    },
  });

  $(".cart-btn-section").on("click", "p",  function () {
    $("#confirmation-dialog").dialog("open");
  });
});

export { getCart, loadCart, addToCart, removeToCart };

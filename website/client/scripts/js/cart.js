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

function recordOrder() {
  let cart = getCart();
  $.ajax({
    url: phpFilePath + "post.php",
    type: "POST",
    data: {
      post: "recordOrder",
      userId: "63e297f8e654ae516c04c3f2",
      cart: JSON.stringify(cart),
    },
    success: function (responseTxt, statusTxt, xhr) {
      sessionStorage.removeItem("cart");

    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
    },
  });
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
      Confirm: function () {
        $(this).dialog("close");
        recordOrder();
        $("#approved-confirmation-dialog").dialog("open");
      },
      Cancel: function () {
        $(this).dialog("close");
      },
    },
    show: {
      duration: 800,
    },
    hide: {
      duration: 800,
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

  $("#empty-cart-dialog").dialog({
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

  $(".cart-btn-section").on("click", "p", function () {
    let cart = getCart();
    if (cart.length === 0) {
      $("#empty-cart-dialog").dialog("open");
      return;
    } else {
      $("#confirmation-dialog").dialog("open");
    }
  });
});

export { getCart, loadCart, addToCart, removeToCart };

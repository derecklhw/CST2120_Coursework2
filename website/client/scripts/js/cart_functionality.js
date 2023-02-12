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
    async: false,
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
      sessionStorage.removeItem("search");
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        console.log("Error: " + xhr.status + ": " + xhr.statusText);
      }
    },
  });
}

export {
  getCart,
  loadCart,
  addToCart,
  removeToCart,
  updateCartProductQty,
  recordOrder,
};

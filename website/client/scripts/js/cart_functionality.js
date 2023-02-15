// php file path
let phpFilePath = "scripts/php/";

// get cart from session storage
function getCart() {
  let cart;
  if (sessionStorage.cart === undefined || sessionStorage.cart === "") {
    cart = [];
  } else {
    cart = JSON.parse(sessionStorage.cart);
  }
  return cart;
}

// load cart to html
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

// add item to cart
function addToCart(id) {
  let cart = getCart();
  $.ajax({
    url: "scripts/php/get.php",
    data: { info: "getProductDetails", productId: id },
    async: false,
    success: function (responseTxt) {
      // add item details to session storage
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

// remove items from cart
function removeToCart(id) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart.splice(i, 1);
    }
  }
  sessionStorage.cart = JSON.stringify(cart);
}

// update quantity of items in cart
function updateCartProductQty(id, quantity) {
  let cart = getCart();
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].id === id) {
      cart[i].quantity = quantity;
    }
  }
  sessionStorage.cart = JSON.stringify(cart);
}

// record order
function recordOrder() {
  let cart = getCart();
  $.ajax({
    url: phpFilePath + "post.php",
    type: "POST",
    data: {
      info: "recordOrder",
      // userId: "63e297f8e654ae516c04c3f2",
      cart: JSON.stringify(cart),
    },
    success: function (responseTxt, statusTxt, xhr) {
      // clear cart in session storage
      sessionStorage.removeItem("cart");
      // clear search in session storage
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

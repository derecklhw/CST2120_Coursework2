import {
  getCart,
  loadCart,
  removeToCart,
  updateCartProductQty,
  recordOrder,
} from "./cart_functionality.js";

// await the html document finished loading for execusion
$(function () {
  loadCart();

  // event handler for trash button to remove items in cart
  $(".sub-sections").on("click", ".fa-trash", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    removeToCart(id);
    loadCart();
  });

  // event handler for quantity input fields to update items quantity in cart
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

  // configuration settings for confirmation dialog
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

  // configuration settings for approved confirmation dialog
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

  // configuration settings for empty cart dialog
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

  // event handler for checkout button
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

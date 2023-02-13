import {
  getCart,
  loadCart,
  removeToCart,
  updateCartProductQty,
  recordOrder,
} from "./cart_functionality.js";

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

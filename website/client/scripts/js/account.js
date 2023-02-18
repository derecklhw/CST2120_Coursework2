function buildAccountName() {
  $.ajax({
    url: phpFilePath + "get.php",
    type: "GET",
    data: {
      info: "getAccountName",
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#account-name").html(responseTxt);
    },
  });
}

function buildUserDetails() {
  $.ajax({
    url: phpFilePath + "build.php",
    type: "POST",
    data: {
      build: "userDetails",
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#account-details-container").html(responseTxt);
    },
  });
}

function editAccountDetails() {
  $.ajax({
    url: phpFilePath + "post.php",
    type: "POST",
    data: {
      info: "editAccountDetails",
      name: $("#name_input").val(),
      surname: $("#surname_input").val(),
      email: $("#email_input").val(),
      phone: $("#phone_input").val(),
      address: $("#address_input").val(),
    },
    success: function (responseTxt, statusTxt, xhr) {
      buildUserDetails();
    },
  });
}

function buildPastOrderTable() {
  $.ajax({
    url: phpFilePath + "build.php",
    type: "POST",
    data: {
      build: "pastOrderTable",
    },
    success: function (responseTxt, statusTxt, xhr) {
      $("#order-table").html(responseTxt);
    },
    error: function (responseTxt, statusTxt, xhr) {
      if (statusTxt == "error") {
        $("#order-table").html(
          '<p>Greetings User <br>No Past Order History found.</p>'
        );
      }
    },
  });
}

$(function () {
  buildAccountName();
  buildUserDetails();
  buildPastOrderTable();

  $("#edit-account-btn").on("click", function () {
    $.ajax({
      url: phpFilePath + "build.php",
      type: "POST",
      data: {
        build: "editAccount",
      },
      success: function (responseTxt, statusTxt, xhr) {
        $("#edit-account-dialog").html(responseTxt);
      },
    });
    $("#edit-account-dialog").dialog("open");
  });

  $("#edit-account-dialog").dialog({
    autoOpen: false,
    resizable: false,
    draggable: false,
    modal: true,
    buttons: {
      Confirm: function () {
        $(this).dialog("close");
        editAccountDetails();
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
});

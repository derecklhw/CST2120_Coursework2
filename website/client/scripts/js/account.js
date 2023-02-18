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
      }
    })
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

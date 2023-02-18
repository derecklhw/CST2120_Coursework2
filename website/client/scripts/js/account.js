function buildAccountName(){
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

function buildUserDetails(){
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
});

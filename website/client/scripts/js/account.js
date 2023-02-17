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
  buildPastOrderTable();
});

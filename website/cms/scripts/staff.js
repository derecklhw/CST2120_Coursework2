// Define the headers of the tables
var products_header = ["_id","Name","Price","Stock_Available","Season","Category","Image_link",'edit'];
var orders_header = ['Order ID', 'Client ID', 'Orders Product', 'Total price','Address','Date','Delete'];
// Define the fruits cathegories
var fruit_category = ['Citrus', 'Stone fruit', 'Tropical and exotic', 'Berries', 'Melons'];

// function to clear a table of all rows and fill it with new data from array of json objects
function fillProductTable(data,headers) {
    // Change the search input to correspond to the data in the table
    $("#search_1").text("Product Name");
    $("#search_2").text("Product ID");
    $("#search_3").text("stock");

    // Clear the table
    $('#event_table').empty();
    // Set the header of the table
    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    // Fill the table with the data
    for (var i = 0; i < data.length; i++) {
        var row = $('<tr></tr>');
        row.append('<td>' + data[i]['_id']["$oid"] + '</td>');
        row.append('<td>' + data[i]['Name'] + '</td>');
        row.append('<td>' + data[i]['Price'] + '</td>');
        row.append('<td>' + data[i]['Stock_Available'] + '</td>');
        row.append('<td>' + data[i]['Season'] + '</td>');
        row.append('<td>' + data[i]['Category'] + '</td>');
        row.append('<td>' + data[i]['Image_link'] + '</td>');
        row.append('<td><button id="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button></td>');
        $('#event_table').append(row);
    }
}

function fillOrderTable(data,headers) {
    // Change the search input to correspond to the data in the table
    $("#search_1").text("Order ID");
    $("#search_2").text("Client ID");
    $("#search_3").text("Total price");
    
    // Clear the table
    $('#event_table').empty();
    // Set the header of the table
    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    // Fill the table with the data
    for (var i = 0; i < data.length; i++) {
        // Convert the date to a readable format
        var date = new Date(data[i]['date']["$date"]["$numberLong"]*1000);
    
        var row = $('<tr></tr>');
        row.append('<td>' + data[i]['_id']["$oid"] + '</td>');
        row.append('<td>' + data[i]['client_id']["$oid"] + '</td>');

        // Create a new table cell for the orders_product array
        var desc = $('<td></td>')
        for (var j = 0; j < data[i]['orders_product'].length; j++) {
            desc.append(data[i]['orders_product'][j]['name'] + ' x ' + data[i]['orders_product'][j]['quantity'] + '<br>');
        }
        row.append(desc);
        row.append('<td>' + data[i]['total_price'] + '</td>');
        row.append('<td>' + data[i]['address']+ '</td>');
        row.append('<td>' + date + '</td>');
        row.append('<td>' + '<button class="delete" id="delete_order"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>' + '</td>');
        $('#event_table').append(row);
    }
}

// function to fetch and fill the product data table
async function fetch_and_fill_product_table() {
    try {
        var data = await getData("products");
        fillProductTable(data,products_header);
    } catch (error) {
        console.log(error)
    }
}

// function to fetch and fill the order data table
async function fetch_and_fill_order_table() {
    try {
        var data = await getData("orders");
        fillOrderTable(data,orders_header);
    } catch (error) {
        console.log(error)
    }
}

// function to send new product data to the database
function send_data(){
    var name = document.getElementById("Name_input").value;
    var price = document.getElementById("price_input").value;
    var season = document.getElementById("season_input").value;
    var nb_available = document.getElementById("nb_available_input").value;
    var category = document.getElementById("category_input").value;
    var image_link = document.getElementById("image_link_input").value;
    var data = { name: name, price: price, season: season, nb_available: nb_available, category: category, image_link: image_link };

  
    fetch("php/send_product.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response)
      .then(data => console.log(data))
      .catch(error => console.log(error));

    console.log(response);
}

async function getData(table) {
    if (table == "products") {
        var url = "php/receive_product.php";
    } else if (table == "orders") {
        var url = "php/receive_orders.php";
    }

    try {
        const response = await fetch(url);
        const data = await response.json();
        // fillProductTable(data,products_header);
        return data;
    } catch (error) {
        console.log("in get data : "+error)
    }
}


async function addProduct() {
    // Get form data
    const name = document.getElementById("Name_input").value;
    const price = document.getElementById("price_input").value;
    const stock = document.getElementById("season_input").value;
    const season = document.getElementById("nb_available_input").value;
    const category = document.getElementById("select_category").value;
    const image = document.getElementById("image_link_input").value;
    // Create data object
    const data = { name, price, stock, season, category, image };
    try {
      const response = await fetch("php/send_product.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.json();
      $("#dialog_add").dialog("close");
      fetch_and_fill_product_table();
    } catch (error) {
      console.log(error);
    }
}

async function updateProduct(){
    // Get form data
    const _id = document.getElementById("Id_input_edit").value;
    const name = document.getElementById("Name_input_edit").value;
    const price =  Number(document.getElementById("price_input_edit").value);
    const stock = Number(document.getElementById("nb_available_input_edit").value);
    const season = document.getElementById("season_input_edit").value;
    const category = document.getElementById("select_category_edit").value;
    const image = document.getElementById("image_link_input_edit").value;
    // Create data object
    const data = {_id, name,  price, season, stock, category, image };
    try {
      const response = await fetch("php/update_product.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.json();
      $("#dialog_edit").dialog("close");
      fill_products_table();
    
    } catch (error) {
        if (error instanceof SyntaxError){
            console.log("Syntax error : " +error);
        
            // PROBLEM error with your input in a prompt
            var error = prompt("Syntax error : " +error);
            console.log(error);
        }else {
            console.log("Unknow error : " +error);
        }
    }
}

async function deleteProduct(){
    // get option from select element
    var select = document.getElementById("select_delete_type");
    var selected_option = select.value;
    var input = document.getElementById("delete_input").value;

    if ((selected_option == 2) | (selected_option == 3)){
        data = {selected_option, input};
        try {
            const response = await fetch("php/remove_product.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
            });
            const result = await response.json();
            $("#dialog_edit").dialog("close");
            fetch_and_fill_product_table();
        } catch (error) {
            console.log(error);
        }
    }
}

async function deleteOrder(){
    var order_id = $("#delete_id_order").text();

    console.log("delete order : " +order_id);
    data = {order_id};
    try {
        const response = await fetch("php/remove_order.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        $("#dialog_delete_order").dialog("close");
        fetch_and_fill_order_table();
    } catch (error) {
        console.log(error);
    }
}


function sort(method, arr, header){
    if (method == 'Ascending_Price'){
        return arr.sort((a, b) => {
            return a[header] - b[header];
        });
    }else if (method == 'Descending_price'){
        return arr.sort((a, b) => {
            return b[header] - a[header];
        });}
};


async function searching(){

    // get html value of id search_1
    var search_1 = document.getElementById("search_1").textContent;
    // get the input value of field_1
    var field_1 = document.getElementById("field_1").value;
    var field_2 = document.getElementById("field_2").value;
    var field_3 = document.getElementById("field_3").value;
    var select = document.getElementById("select").value;
    
    filter = {};
    if (search_1 == "Product Name"){
        console.log("in product");
        filter["table"] = "products";
        if (field_1 != ""){
            filter["Name"] = field_1;
        }
        if (field_2 != ""){
            filter["_id"] = field_2;
        }
        if (field_3 != ""){
            filter["Stock_Available"] = Number(field_3);
        }
        

    }else if (search_1 == "Order ID"){
        console.log("in order");
        filter["table"] = "orders";
        if (field_1 != ""){
            filter["_id"] = field_1;
        }
        if (field_2 != ""){
            filter["client_id"] = field_2;
        }
        if (field_3 != ""){
            filter["total_price"] = Number(field_3);
        }
    }else{
        console.log("other");
    } 
    const response = await fetch("php/receive_with_filter.php", {
        method: "POST",
        body: JSON.stringify(filter),
        headers: { "Content-Type": "application/json" }
    });
    const result = await response.json();
    if (search_1 == "Product Name"){
        fillProductTable(sort(select,result,"Price"),products_header);
    }else if (search_1 == "Order ID"){
        fillOrderTable(sort(select,result,"total_price"),orders_header);
    }
}


$("#edit").click(function () {
    $("#dialog_edit").dialog("open");
    $("#dialog_edit").draggable();
});



$(function () {
    // fill table with data on page load
    fetch_and_fill_product_table();

    $("#dialog_add").dialog({
        autoOpen: false,
        show: {
          duration: 150,
        },
        hide: {
          duration: 150,
        },
    });
    $("#dialog_delete").dialog({
        autoOpen: false,
        show: {
          duration: 150,
        },
        hide: {
          duration: 150,
        },
    });
    $("#dialog_edit").dialog({
        autoOpen: false,
        show: {
          duration: 150,
        },
        hide: {
          duration: 150,
        },
    });
    $("#dialog_delete_order").dialog({
        autoOpen: false,
        show: {
          duration: 150,
        },
        hide: {
          duration: 150,
        },
    });



    $("#add").click(function () {
        // $("#dialog_add").dialog("option", "height",600)
        $("#dialog_add").dialog("open");
        $("#dialog_add").draggable();
    });

    $("#delete_product").click(function () {
        $('#select_delete_type').empty();
        $('#select_delete_type').append($('<option>').val(1).text('Select by'));//.id("delete_select_0"
        $('#select_delete_type').append($('<option>').val(2).text('ID'));//.id("delete_select_1")
        $('#select_delete_type').append($('<option>').val(3).text('Name'));//.id("delete_select_2")

        $("#dialog_delete").dialog("open");
        $("#dialog_delete").draggable();
    });




    // listen when button with view_order id is clicked and fill table with orders data
    $("#view_orders").click(function () {
        fetch_and_fill_order_table();
    });
    
    $("#list_products").click(async function () {
        fetch_and_fill_product_table();
    });



    $(document).on("click", "#delete_order", function() {
        var row = $(this).closest("tr");
        var id = row.find("td:eq(0)").text();
        var name = row.find("td:eq(1)").text();
        var products = row.find("td:eq(2)").text();
        var price = row.find("td:eq(3)").text();

        //put the id in a paragraph with id delete_id_order
        $("#delete_id_order").text(id);
        $("#delete_product_order").text(products);
        $("#delete_price_order").text(price);

        $("#dialog_delete_order").dialog("open");
        $("#dialog_delete_order").draggable();

    });

    $(document).on("click", "#edit", function() {
        var row = $(this).closest("tr");
        var id = row.find("td:eq(0)").text();
        var name = row.find("td:eq(1)").text();
        var price = row.find("td:eq(2)").text();
        var stock = row.find("td:eq(3)").text();
        var season = row.find("td:eq(4)").text();
        var category = row.find("td:eq(5)").text();
        var image = row.find("td:eq(6)").text();
    
        $("#Id_input_edit").val(id);
        $("#Name_input_edit").val(name);
        $("#price_input_edit").val(price);
        $("#season_input_edit").val(season);
        $("#nb_available_input_edit").val(stock);
        if (fruit_category.includes(category)){
            $("#select_category_edit").val(category).change();
        }
        else{
            $("#select_category_edit").val("Select category").change();
        }
        $("#image_link_input_edit").val(image);

        $("#dialog_edit").dialog("open");
        $("#dialog_edit").draggable();

    });
});


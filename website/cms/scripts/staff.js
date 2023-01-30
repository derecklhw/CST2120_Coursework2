var products_header = ["_id","Name","Price","Stock_Available","Season","Category","Image_link",'edit'];
// generate a array of jason base on products_header
var data_product = [
    {'Product_Id': "123456",'Product Name': 'Product 1',  'Price': 'Price 1', 'Stock_available': 'Stock 1','image_link':'image_link 1','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 2',  'Price': 'Price 2', 'Stock_available': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 3',  'Price': 'Price 3', 'Stock_available': 'Stock 3','image_link':'image_link 3','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 4',  'Price': 'Price 4', 'Stock_available': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 2',  'Price': 'Price 2', 'Stock_available': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 3',  'Price': 'Price 3', 'Stock_available': 'Stock 3','image_link':'image_link 3','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 4',  'Price': 'Price 4', 'Stock_available': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 2',  'Price': 'Price 2', 'Stock_available': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product_Id': "123456",'Product Name': 'Product 4',  'Price': 'Price 4', 'Stock_available': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'}];

// generate a orders_header array
var orders_header = ['Order ID', 'Client ID', 'Orders Product', 'Total price','Date','Delete'];
// generate a array of jason base on orders_header
var data_order = [
    {'Order ID': 'Order 1', 'Client ID': 'Client 1','Description':[{'product': "product1",'Quantity': 3},{'product': "product5",'Quantity': 1},{'product': "product1",'Quantity': 2},], 'Total price': 'Total price 1','Date': "15/02/2023",'delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 1', 'Client ID': 'Client 1','Description':[{'product': "product1",'Quantity': 3},{'product': "product5",'Quantity': 1},{'product': "product1",'Quantity': 2},], 'Total price': 'Total price 1','Date': "15/02/2023",'delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 1', 'Client ID': 'Client 1','Description':[{'product': "product1",'Quantity': 3},{'product': "product1",'Quantity': 2},], 'Total price': 'Total price 1','Date': "15/02/2023",'delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 1', 'Client ID': 'Client 1','Description':[{'product': "product1",'Quantity': 3},{'product': "product5",'Quantity': 1},{'product': "product1",'Quantity': 2},], 'Total price': 'Total price 1','Date': "15/02/2023",'delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 1', 'Client ID': 'Client 1','Description':[{'product': "product1",'Quantity': 3},{'product': "product5",'Quantity': 1},{'product': "product1",'Quantity': 2},], 'Total price': 'Total price 1','Date': "15/02/2023",'delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
];

// function to clear a table of all rows and fill it with new data from array of json objects
function fillTable(data,headers) {

    $("#search_1").text("Product Name");
    $("#search_2").text("Product ID");
    $("#search_3").text("stock");


    $('#event_table').empty();
    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    for (var i = 0; i < data.length; i++) {
        var row = $('<tr></tr>');
        row.append('<td>' + data[i]['_id']["$oid"] + '</td>');
        row.append('<td>' + data[i]['Name'] + '</td>');
        row.append('<td>' + data[i]['Price'] + '</td>');
        row.append('<td>' + data[i]['Stock_Available'] + '</td>');
        row.append('<td>' + data[i]['Season'] + '</td>');
        row.append('<td>' + data[i]['Category'] + '</td>');
        row.append('<td>' + data[i]['Image_link'] + '</td>');
        row.append('<td>' + '<button id="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>' + '</td>');
        $('#event_table').append(row);
    }
}

function fillOrderTable(data,headers) {

    $("#search_1").text("Order ID");
    $("#search_2").text("Client ID");
    $("#search_3").text("Total price");

    // $('#event_table').empty();
    // var header = $('<tr></tr>');
    // for (var i = 0; i < headers.length; i++) {
    //     header.append('<th>' + headers[i] + '</th>');
    // }
    // $('#event_table').append(header);
    // for (var i = 0; i < data.length; i++) {
    //     var row = $('<tr></tr>');
    //     row.append('<td>' + data[i]['Order ID'] + '</td>');
    //     row.append('<td>' + data[i]['Client ID'] + '</td>');
    //     var desc = $('<td></td>');
    //     for (var j = 0; j < data[i]['Description'].length; j++) {
    //         desc.append(data[i]['Description'][j]['product'] + ' - x' + data[i]['Description'][j]['Quantity'] + '<br>');
    //     }
    //     row.append(desc);
    //     row.append('<td>' + data[i]['Total price'] + '</td>');
    //     row.append('<td>' + data[i]['Date'] + '</td>');
    //     row.append('<td>' + data[i]['delete'] + '</td>');
    //     $('#event_table').append(row);
    // }
    $('#event_table').empty();
    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    for (var i = 0; i < data.length; i++) {
        var row = $('<tr></tr>');
        row.append('<td>' + data[i]['_id']["$oid"] + '</td>');
        row.append('<td>' + data[i]['client_id']["$oid"] + '</td>');

        row.append('<td>' + data[i]['orders_product'] + '</td>');
        row.append('<td>' + data[i]['total_price'] + '</td>');
        row.append('<td>' + data[i]['date']["$date"] + '</td>');
        // row.append('<td>' + data[i]['Season'] + '</td>');
        // row.append('<td>' + data[i]['Category'] + '</td>');
        // row.append('<td>' + data[i]['Image_link'] + '</td>');
        row.append('<td>' + '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>' + '</td>');
        $('#event_table').append(row);
    }
}


function send_data(){
    var name = document.getElementById("Name_input").value;
    var price = document.getElementById("price_input").value;
    var season = document.getElementById("season_input").value;
    var nb_available = document.getElementById("nb_available_input").value;
    var category = document.getElementById("category_input").value;
    var image_link = document.getElementById("image_link_input").value;
    var data = { name: name, price: price, season: season, nb_available: nb_available, category: category, image_link: image_link };

    console.log(data);

  
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
        console.log(data);
        // fillTable(data,products_header);
        return data;
    } catch (error) {
        console.log("in get data : "+error)
    }
}

async function fill_products_table() {
    try {
        var data = await getData("products");
        fillTable(data,products_header);
    } catch (error) {
        console.log(error)
    }
}

async function fill_orders_table() {
    try {
        var data = await getData("orders");
        fillOrderTable(data,orders_header);
    } catch (error) {
        console.log(error)
    }
}


async function addProduct() {
    // Get form data
    const name = document.getElementById("Name_input").value;
    const price = document.getElementById("price_input").value;
    const stock = document.getElementById("season_input").value;
    const season = document.getElementById("nb_available_input").value;
    const category = document.getElementById("category_input").value;
    const image = document.getElementById("image_link_input").value;
    // Create data object
    const data = { name, price, stock, season, category, image };
    console.log(data);
    try {
      const response = await fetch("php/send_product.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.json();
      console.log(result);
      $("#dialog_add").dialog("close");
    } catch (error) {
      console.log(error);
    }
}

async function updateProduct(){
    console.log("update product");
    // Get form data
    const _id = document.getElementById("Id_input_edit").value;
    const name = document.getElementById("Name_input_edit").value;
    const price = document.getElementById("price_input_edit").value;
    const stock = document.getElementById("nb_available_input_edit").value;
    const season = document.getElementById("season_input_edit").value;
    const category = document.getElementById("category_input_edit").value;
    const image = document.getElementById("image_link_input_edit").value;
    // Create data object
    const data = {_id, name, price, season, stock, category, image };
    console.log("update product :" +data);
    try {
      const response = await fetch("php/update_product.php", {
        method: "POST",
        body: JSON.stringify(data),
        headers: { "Content-Type": "application/json" }
      });
      const result = await response.json();
      console.log("result :" +result);
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
    console.log("delete product");
    // get option from select element
    var select = document.getElementById("select_delete_type");
    var selected_option = select.value;
    var input = document.getElementById("delete_input").value;
    console.log(selected_option);
    console.log(input);
    // if option is 1 or 2, send data to php



    if ((selected_option == 2) | (selected_option == 3)){
        data = {selected_option, input};
        try {
            const response = await fetch("php/remove_product.php", {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" }
            });
            const result = await response.json();
            console.log("result :" +result);
            $("#dialog_edit").dialog("close");
            fill_products_table();
        } catch (error) {
            console.log(error);
        }
    }
}



function sort(method, arr){
    if (method == 'Ascending_Price'){
        return arr.sort((a, b) => {
            return a.Price - b.Price;
        });
    }else if (method == 'Descending_price'){
        return arr.sort((a, b) => {
            return b.Price - a.Price;
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
    

    if (search_1 == "Product Name"){
        console.log("in product");
        filter = {};
        if (field_1 != ""){
            filter["Name"] = field_1;
        }
        if (field_2 != ""){
            filter["_id"] = field_2;
        }
        if (field_3 != ""){
            filter["Stock_Available"] = Number(field_3);
        }
        console.log(filter);
        const response = await fetch("php/receive_with_filter.php", {
            method: "POST",
            body: JSON.stringify(filter),
            headers: { "Content-Type": "application/json" }
        });
        const result = await response.json();
        fillTable(sort(select,result),products_header);

    }else if (search_1 == "Order ID"){
        console.log("in order");
    }else{
        console.log("other");
    }
    
}

$("#edit").click(function () {
    console.log("edit");
    $("#dialog_edit").dialog("open");
    $("#dialog_edit").draggable();
});



$(function () {
    // fill table with data on page load
    fill_products_table();

    $("#dialog_add").dialog({
        autoOpen: false,
    });
    $("#dialog_delete").dialog({
        autoOpen: false,
    });
    $("#dialog_edit").dialog({
        autoOpen: false,
    });

    $("#add").click(function () {
        // $("#dialog_add").dialog("option", "height",600)
        $("#dialog_add").dialog("open");
        $("#dialog_add").draggable();
    });

    $("#delete").click(function () {
        $("#dialog_delete").dialog("open");
        $("#dialog_delete").draggable();
    });



    // listen when button with view_order id is clicked and fill table with orders data
    $("#view_orders").click(function () {
        fill_orders_table();
    });
    
    $("#list_products").click(async function () {
        fill_products_table();
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

        
        console.log(id);
        console.log(name);
        console.log(price);
    
    
        $("#Id_input_edit").val(id);
        $("#Name_input_edit").val(name);
        $("#price_input_edit").val(price);
        $("#season_input_edit").val(season);
        $("#nb_available_input_edit").val(stock);
        $("#category_input_edit").val(category);
        $("#image_link_input_edit").val(image);

        $("#dialog_edit").dialog("open");
        $("#dialog_edit").draggable();

    });
});


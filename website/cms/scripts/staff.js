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
var orders_header = ['Order ID', 'Client ID', 'Description', 'Total price','Date','Delete'];
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

    console.log(data[0]['_id']["$oid"]);
    console.log(data[0]['Name']);
    console.log(data[0]['Price']);
    console.log(data[0]['Stock_Available']);
    console.log(data[0]['Season']);


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
        row.append('<td>' + '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>' + '</td>');
        $('#event_table').append(row);
    }
}

function fillOrderTable(data,headers) {

    $('#event_table').empty();
    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    for (var i = 0; i < data.length; i++) {
        var row = $('<tr></tr>');
        row.append('<td>' + data[i]['Order ID'] + '</td>');
        row.append('<td>' + data[i]['Client ID'] + '</td>');
        var desc = $('<td></td>');
        for (var j = 0; j < data[i]['Description'].length; j++) {
            desc.append(data[i]['Description'][j]['product'] + ' - x' + data[i]['Description'][j]['Quantity'] + '<br>');
        }
        row.append(desc);
        row.append('<td>' + data[i]['Total price'] + '</td>');
        row.append('<td>' + data[i]['Date'] + '</td>');
        row.append('<td>' + data[i]['delete'] + '</td>');
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
    var ste = JSON.stringify(data);
  
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

async function getData() {
    try {
        const response = await fetch("php/receive_product.php");
        const data = await response.json();
        console.log(data);
        // fillTable(data,products_header);
        return data;
    } catch (error) {
        console.log(error)
    }
}
async function fill_products_table() {
    try {
        var data = await getData();
        fillTable(data,products_header);
    } catch (error) {
        console.log(error)
    }
}

$(function () {
    // fill table with data on page load
    fill_products_table();

    $("#dialog_add").dialog({
        autoOpen: false,
    });
    $("#dialog_delete").dialog({
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
        // fillTable(data_order,orders_header);
        fillOrderTable(data_order,orders_header);
        $("#search_1").text("Order ID");
        $("#search_2").text("Client ID");
        $("#search_3").text("Total price");   
        
    });
    
    $("#list_products").click(function () {
        fillTable(getData(),products_header);
        // getData();
        $("#search_1").text("Product Name");
        $("#search_2").text("Product ID");
        $("#search_3").text("stock available");
    });

    // $("#view_order").click(function () {
});
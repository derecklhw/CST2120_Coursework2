var products_header = ['Product_Id','Product Name', 'Price', 'Stock_available','image_link','edit'];
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
    $('#event_table').empty();

    var header = $('<tr></tr>');
    for (var i = 0; i < headers.length; i++) {
        header.append('<th>' + headers[i] + '</th>');
    }
    $('#event_table').append(header);
    // add data rows
    for (var i = 0; i < data.length; i++) {
        var row = $('<tr></tr>');
        for (var j = 0; j < headers.length; j++) {
            row.append('<td>' + data[i][headers[j]] + '</td>');
        }
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

$(function () {
    // fill table with data on page load
    fillTable(data_product,products_header);

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
        fillTable(data_product,products_header);
        $("#search_1").text("Product Name");
        $("#search_2").text("Product ID");
        $("#search_3").text("stock available");
    });

    // $("#view_order").click(function () {
});
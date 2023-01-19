var products_header = ['Product Name', 'Description', 'Price', 'Stock','image_link','edit'];
// generate a array of jason base on products_header
var data_product = [
    {'Product Name': 'Product 1', 'Description': 'Description 1', 'Price': 'Price 1', 'Stock': 'Stock 1','image_link':'image_link 1','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 2', 'Description': 'Description 2', 'Price': 'Price 2', 'Stock': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 3', 'Description': 'Description 3', 'Price': 'Price 3', 'Stock': 'Stock 3','image_link':'image_link 3','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 4', 'Description': 'Description 4', 'Price': 'Price 4', 'Stock': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 2', 'Description': 'Description 2', 'Price': 'Price 2', 'Stock': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 3', 'Description': 'Description 3', 'Price': 'Price 3', 'Stock': 'Stock 3','image_link':'image_link 3','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 4', 'Description': 'Description 4', 'Price': 'Price 4', 'Stock': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 2', 'Description': 'Description 2', 'Price': 'Price 2', 'Stock': 'Stock 2','image_link':'image_link 2','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'},
    {'Product Name': 'Product 4', 'Description': 'Description 4', 'Price': 'Price 4', 'Stock': 'Stock 4','image_link':'image_link 4','edit': '<button class="edit"><i class="fa-sharp fa-solid fa-pencil"></i> edit</button>'}];

// generate a orders_header array
var orders_header = ['Order ID', 'Client ID','Product ID', 'Quantity', 'Price', 'Total price','delete'];
// generate a array of jason base on orders_header
var data_order = [
    {'Order ID': 'Order 1', 'Client ID': 'Client 1', 'Product ID': 'Product 1', 'Quantity': 'Quantity 1', 'Price': 'Price 1', 'Total price': 'Total price 1','delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 2', 'Client ID': 'Client 2', 'Product ID': 'Product 2', 'Quantity': 'Quantity 2', 'Price': 'Price 2', 'Total price': 'Total price 2','delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 3', 'Client ID': 'Client 3', 'Product ID': 'Product 3', 'Quantity': 'Quantity 3', 'Price': 'Price 3', 'Total price': 'Total price 3','delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 4', 'Client ID': 'Client 4', 'Product ID': 'Product 4', 'Quantity': 'Quantity 4', 'Price': 'Price 4', 'Total price': 'Total price 4','delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'},
    {'Order ID': 'Order 5', 'Client ID': 'Client 5', 'Product ID': 'Product 5', 'Quantity': 'Quantity 5', 'Price': 'Price 5', 'Total price': 'Total price 5','delete': '<button class="delete"><i class="fa-sharp fa-solid fa-eraser"></i> delete</button>'}
];

// function to clear a table of all rows and fill it with new data from array of json objects
function fillTable(data,headers) {
    // clear table
    $('#event_table').empty();
    // add header row
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
        fillTable(data_order,orders_header);
        console.log("view_orders");
    });

    $("#list_products").click(function () {
        fillTable(data_product,products_header);
        console.log("list_products");
    });

    // $("#view_order").click(function () {
});
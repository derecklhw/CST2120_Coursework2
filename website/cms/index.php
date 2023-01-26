<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>CMS - Home Page</title>
    <!-- link with cms.css -->
    <link href="styles\cms.css" rel="stylesheet" type="text/css" />
    <!-- link with fontawesome api -->
    <script
      src="https://kit.fontawesome.com/6792829ccf.js"
      crossorigin="anonymous"
    ></script>
  </head>

  <body>
    <!-- import jquery -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
    <!-- import bootstrap -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <!-- import staff.js -->
    <script async src="scripts\staff.js" type="text/javascript"></script>

    <!-- Header functionality options -->
    <div id="header">
      <button id="list_products">
        <i class="fa-sharp fa-solid fa-list"></i> List Products
      </button>
      <button id="view_orders">
        <i class="fa-sharp fa-solid fa-list"></i> List Orders
      </button>
      <button id="add">
        <i class="fa-sharp fa-solid fa-plus"></i> Add Product
      </button>
      <button id="delete">
        <i class="fa-sharp fa-solid fa-eraser"></i> Remove Product
      </button>
    </div>

    <!-- Add Product dialog pop up -->
    <div class="dialog_popup" id="dialog_add">
      <div>Product name</div>
      <input type="text" id="Name_input" />
      <div>price</div>
      <input type="text" id="price_input" />
      <div>season</div>
      <input type="text" id="season_input" />
      <div>nb_available</div>
      <input type="text" id="nb_available_input" />
      <div>category</div>
      <input type="text" id="category_input" />
      <div>image link</div>
      <input type="text" id="image_link_input" />
      <div class="button" id="button-2">
        <button class="popup_button" id="add_product" onclick="addProduct()">add</button>
      </div>
      <div id="button-2">
        <button
          class="popup_button"
          id="closeDialog"
          onclick="$('#dialog_add').dialog('close');"
        >
          Cancel
        </button>
      </div>
    </div>

    <div class="dialog_popup" id="dialog_edit">
      <div>Product ID</div>
      <input type="text" id="Id_input_edit" />
      <div>Product name</div>
      <input type="text" id="Name_input_edit" />
      <div>price</div>
      <input type="text" id="price_input_edit" />
      <div>season</div>
      <input type="text" id="season_input_edit" />
      <div>nb_available</div>
      <input type="text" id="nb_available_input_edit" />
      <div>category</div>
      <input type="text" id="category_input_edit" />
      <div>image link</div>
      <input type="text" id="image_link_input_edit" />
      <div class="button" id="button-2">
        <button class="popup_button" id="Save_button" onclick="updateProduct()">Save</button>
      </div>
      <div id="button-2">
        <button
          class="popup_button"
          id="closeDialog"
          onclick="$('#dialog_edit').dialog('close');"
        >
          Cancel
        </button>
      </div>
    </div>


    <!-- Remove Product dialog pop up -->
    <div class="dialog_popup" id="dialog_delete">
      <select id="select_delete_type">
        <option value="1">Select by</option>
        <option value="2">Id</option>
        <option value="3">Name</option>
      </select>
      <div>input</div>
      <input type="text" id="delete_input" />
      <div></div>
      <div>
        <button class="popup_button" id="delete_product">delete</button>
      </div>
      <div id="button-2">
        <button
          class="popup_button"
          id="closeDialog"
          onclick="$('#dialog_delete').dialog('close');"
        >
          Cancel
        </button>
      </div>
    </div>

    <!-- Product Search functionality -->
    <div id="container">
      <div id="box">
        <!-- input options fields -->
        <div id="up_element">
          <div id="search_1">Product name</div>
          <input type="text" id="field 1" />
          <div id="search_1">Price</div>
          <input type="text" id="field 2" />
          <div id="search_1">Stock</div>
          <input type="text" id="field 3" />
        </div>
        <div id="down_element">
          <!-- dropdown options fields -->
          <select id="select">
            <option value="1">higer price</option>
            <option value="2">More popular</option>
            <option value="3">lower price</option>
          </select>
          <button id="search">search</button>
        </div>
      </div>

      <table width="100%">
        <tbody id="event_table"></tbody>
      </table>
    </div>
  </body>
</html>

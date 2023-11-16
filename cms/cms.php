<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8" />
  <title>CMS - Home Page</title>
  <!-- link with cms.css -->
  <link href="styles\cms.css" rel="stylesheet" type="text/css" />
  <!-- link with fontawesome api -->
  <script src="https://kit.fontawesome.com/6792829ccf.js" crossorigin="anonymous"></script>
  <!-- import jquery -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
  <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js"></script>
  <!-- import bootstrap -->
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
</head>

<body>
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
    <button id="delete_product">
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
    <!-- <input type="text" id="category_input" /> -->
    <select id="select_category">
      <option value="Select category">Select category</option>
      <option value="Apple and pears">Apple and pears</option>
      <option value="Citrus">Citrus</option>
      <option value="Stone fruit">Stone fruit</option>
      <option value="Tropical and exotic">Tropical and exotic</option>
      <option value="Berries">Berries</option>
      <option value="melon">melon</option>
    </select>
    <div>image link</div>
    <input type="text" id="image_link_input" />
    <div class="button" id="button-2">
      <button class="popup_button" id="add_product" onclick="addProduct()">add</button>
    </div>
    <div id="button-2">
      <button class="popup_button" id="closeDialog" onclick="$('#dialog_add').dialog('close');">
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
    <div>nb_available</div>
    <input type="text" id="nb_available_input_edit" />
    <div>season</div>
    <input type="text" id="season_input_edit" />
    <div>category</div>
    <select id="select_category_edit">
      <option value="Select category">Select category</option>
      <option value="Apple and pears">Apple and pears</option>
      <option value="Citrus">Citrus</option>
      <option value="Stone fruit">Stone fruit</option>
      <option value="Tropical and exotic">Tropical and exotic</option>
      <option value="Berries">Berries</option>
      <option value="Melon">Melon</option>
    </select>
    <div>image link</div>
    <input type="text" id="image_link_input_edit" />
    <div class="button" id="button-2">
      <button class="popup_button" id="Save_button" onclick="updateProduct()">Save</button>
    </div>
    <div id="button-2">
      <button class="popup_button" id="closeDialog" onclick="$('#dialog_edit').dialog('close');">
        Cancel
      </button>
    </div>
  </div>

  <div class="dialog_popup" id="dialog_delete_order">
    <h3>Delete order.</h3>
    <h4>Order Id : </h4>
    <p id='delete_id_order'></p>
    <h4>product : </h4>
    <p id='delete_product_order'></p>
    <h4>total price : </h4>
    <p id='delete_price_order'></p>

    <div>
      <button class="popup_button" id="delete_order" onclick="deleteOrder()">delete</button>
    </div>
    <div id="button-2">
      <button class="popup_button" id="closeDialog" onclick="$('#dialog_delete_order').dialog('close');">
        Cancel
      </button>
    </div>
  </div>


  <!-- Remove Product dialog pop up -->
  <div class="dialog_popup" id="dialog_delete">
    <select id="select_delete_type">
      <option value="1">Select by</option>
    </select>
    <div>input</div>
    <input type="text" id="delete_input" />
    <div></div>
    <div>
      <button class="popup_button" id="delete_product" onclick="deleteProduct()">delete</button>
    </div>
    <div id="button-2">
      <button class="popup_button" id="closeDialog" onclick="$('#dialog_delete').dialog('close');">
        Cancel
      </button>
    </div>
  </div>

  <!-- Product Search functionality -->
  <div id="container">
    <div id="box">
      <!-- input options fields -->
      <div id="up_element">
        <div id="search_1"></div>
        <input type="text" id="field_1" />
        <div id="search_2"></div>
        <input type="text" id="field_2" />
        <div id="search_3"></div>
        <input type="text" id="field_3" />
      </div>
      <div id="down_element">
        <!-- dropdown options fields -->
        <select id="select">
          <option value="Ascending_Price">Ascending price</option>
          <option value="Descending_price">Descending price</option>
        </select>
        <button id="search" onclick="searching()">search</button>
      </div>
    </div>

    <table width="100%">
      <tbody id="event_table"></tbody>
    </table>
  </div>
</body>

</html>
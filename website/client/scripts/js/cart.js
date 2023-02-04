function getCart() {
    let cart;
    if (sessionStorage.cart === undefined || sessionStorage.cart === "") {
        cart = [];
    }
    else {
        cart = JSON.parse(sessionStorage.cart);
    }
    return cart;
}

function loadCart() {}

function addToCart(id) {
    let cart = getCart();
    $.ajax({
        
    })
    cart.push({
        "id": id,
        "name": "test",
        "quantity": "test",
        "price": "test"
    });
    sessionStorage.cart = JSON.stringify(cart);
}

function removeToCart() {}

export {addToCart}

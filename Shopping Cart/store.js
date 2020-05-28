if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded')
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }
        var quantityInputs = document.getElementsByClassName('btn-danger')
        for (var i = 0; i < quantityInputs.length; i++) {
            var input = quantityInputs[i]
            input.addEventListener('change', quantityChanged)
        }
    var addToCartButtons = document.getElementsByClassName('shop-item=buttons')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

 }

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    console.log(title, price, imageSrc)
    addItemToCart(title, price, imageSrc)
}

function addItemToCart(title, image, imageSrc) {
    var cartRow = document.createElement('div')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-tem-title')
    for (var i=0; i < cartTitemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return 
        }
    }
    var cartRowContents =   
        <div class="cart-item cart-column">
            <img class="cart-temt-image" src="Images.Shirt.png" width="100"
            height="100">
                <span class="cart-item-title">T-Shirt</span>
            </img>
        </div>
        <span class="cart-price cart-column">$19.99</span>
        <div class="cart-price cart-column">
            <input class="cart-quantity-input" type= "number value" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>
    cartItems.append(cartRow)
}

var removeCartItemButtons = document.getElementsByClassName('btn-danger')
console.log('removeCartItemButtons')
for (var i = 0; i <removeCartItemButtons.length; i++){
    var button = removeCartItemButtons [i]
    button.addEventListener('click', function(){
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        updateCartTotal()
    })
}

function removeCartItem (event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function updateCartTotal(event) {
    var input = event.target
    if (isNaN(input.value) || imput.value<=0) {
        input.value = 1
    }
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = (priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
const cart = JSON.parse(localStorage.getItem('cart'));
const cartElement = document.getElementById('cartReview');

var count = document.querySelector(".count")
count.innerHTML = cart.length;

if (cart && cart.length) {
  cart.forEach(item => {
    // item.preventDefault();
    const itemElement = document.createElement('div');
    itemElement.classList.add("flexContainer");
    itemElement.innerHTML = `
            <div>
                <img src=${item.imageSrc} alt="" class="img-fluid cartImage">
            </div>
            <div class="mt-4">
                <h3 class="cartTitle">${item.title}</h3>
                <p class="price cartPrice">${item.price}</p>
            </div>
            <div>
                <form action="">
                    <input type="number" name="" id="" class="quantity">
                </form>
            </div>
            <div class="times">
                <span>X</span>
            </div>
            <div class="mt-4 cancelButton">
                <button>Cancel</button>
            </div>
        
    `;
    cartElement.appendChild(itemElement);
  });
} else {
    const itemElement = document.createElement('div');
    itemElement.classList.add("flexContainer");
    itemElement.innerHTML = `<p>Cart is empty</p>`
    cartElement.appendChild(itemElement)
}


var removeCartItemButtons = document.getElementsByClassName("times");
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItem)
    
}

var removeCartItemButtons = document.getElementsByClassName("cancelButton");
for (var i = 0; i < removeCartItemButtons.length; i++) {
    var button = removeCartItemButtons[i]
    button.addEventListener("click", removeCartItemBtn)
} 

var quantityInput = document.getElementsByClassName("quantity")
for (var i = 0; i < quantityInput.length; i++) {
    var input = quantityInput[i]
    input.addEventListener("change", quantityChanged)
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}


function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    count.innerHTML = --cart.length;
    updateCartTotal();
}  

function removeCartItemBtn(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove();
    count.innerHTML = --cart.length;
    updateCartTotal();
}

function updateCartTotal() {
    var cartItemContainer = document.getElementById("cartReview");
    var cartRows = cartItemContainer.getElementsByClassName("flexContainer")
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName("price")[0] 
        var quantityElement = cartRow.getElementsByClassName("quantity")[0]
        var price = parseFloat(priceElement.innerText.replace("$", " "));
        var quantity = quantityElement.value
        total = total + (price * quantity) 
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName("totalPrice")[0].innerText = "$" + total + ".00" 
}

// confirm order
var confirmOrder = document.querySelector(".confirmOrder");

confirmOrder.addEventListener("click", () => {
    alert("Thank you for your purchase");
});
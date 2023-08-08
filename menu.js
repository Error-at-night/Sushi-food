const inputTag = document.forms["search"].querySelector("input");

inputTag.addEventListener("keyup", function(event) {
    const term = event.target.value.toLowerCase();
    const cols = document.getElementsByClassName("col-12"); 
    Array.from(cols).forEach(function(value){
        const nameofFood = value.textContent.toLowerCase();
        if (nameofFood.indexOf(term) != -1) {
            value.style.display = "block";
        }

        else {
            value.style.display = "none";
        }
    });
});


let cart = [];

const addToCartButtons = document.querySelectorAll('.addtocart');

addToCartButtons.forEach(button => {
  button.addEventListener('click', addToCart);
});

function addToCart(event) {
  const button = event.target;
  const shopItem = button.parentElement.parentElement.parentElement;
  const title = shopItem.getElementsByClassName("shopItemTitle")[0].innerText
  const price = shopItem.getElementsByClassName("shopItemPrice")[0].innerText
  const imageSrc = shopItem.getElementsByClassName("shopItemImage")[0].src
  const item = { title, price, imageSrc };
  cart.push(item);
  var count = document.querySelector(".count")
  count.innerHTML = cart.length;
  saveCart();
}

function saveCart() {
  localStorage.setItem('cart', JSON.stringify(cart));
}


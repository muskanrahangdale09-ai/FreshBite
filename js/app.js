// Shopping Cart

let cart = JSON.parse(localStorage.getItem("freshBiteCart")) || [];

function addToCart(name, price) {

    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            name: name,
            price: price,
            quantity: 1
        });
    }

    localStorage.setItem("freshBiteCart", JSON.stringify(cart));

    alert(name + " added to cart!");
}


// Contact Form

function submitContact(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    alert(
        "Thank you " + name +
        "! Your message has been submitted successfully."
    );

    event.target.reset();
}
const fruits = [
  { name: "Mango", price: 100, image: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=500&q=60" },
  { name: "Apple", price: 80, image: "https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?auto=format&fit=crop&w=500&q=60" },
  { name: "Banana", price: 40, image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=500&q=60" },
  { name: "Pineapple", price: 120, image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?auto=format&fit=crop&w=500&q=60" },
];

const fruitList = document.getElementById("fruit-list");
const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");
const searchInput = document.getElementById("search");

let cart = [];

function displayFruits(fruitArray) {
  fruitList.innerHTML = "";
  fruitArray.forEach((fruit, index) => {
    const div = document.createElement("div");
    div.className = "fruit";
    div.innerHTML = `
      <img src="${fruit.image}" alt="${fruit.name}">
      <h3>${fruit.name}</h3>
      <p>₹${fruit.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    fruitList.appendChild(div);
  });
}

function addToCart(index) {
  cart.push(fruits[index]);
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = `${fruit.name} - ₹${fruit.price}`;
    cartItems.appendChild(li);
    total += fruit.price;
  });
  totalEl.textContent = `Total: ₹${total}`;
}

function checkout() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  alert("Thank you! Your fruits are zooming towards you!");
  cart = [];
  updateCart();
}

searchInput.addEventListener("input", function() {
  const searchTerm = searchInput.value.toLowerCase();
  const filteredFruits = fruits.filter(fruit =>
    fruit.name.toLowerCase().includes(searchTerm)
  );
  displayFruits(filteredFruits);
});

// Initial display
displayFruits(fruits);
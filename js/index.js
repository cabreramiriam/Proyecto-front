// cart.js

var cartItems = [];

function addToCart(productId, productName, productPrice) {
   var item = {
      id: productId,
      name: productName,
      price: productPrice,
      quantity: 1
   };

   // Verifica si el producto ya está en el carrito
   var existingItem = cartItems.find(item => item.id === productId);

   if (existingItem) {
      existingItem.quantity++;
   } else {
      cartItems.push(item);
   }

   updateCart();
}

function updateCart() {
   var cartList = document.getElementById("cart-items");
   var cartTotal = document.getElementById("cart-total");
   var total = 0;

   // Limpiar el contenido actual del carrito
   cartList.innerHTML = "";

   // Actualizar la lista del carrito
   cartItems.forEach(item => {
      var listItem = document.createElement("li");
      listItem.textContent = `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`;
      cartList.appendChild(listItem);

      total += item.price * item.quantity;
   });

   // Actualizar el total del carrito
   cartTotal.textContent = total.toFixed(2);
}
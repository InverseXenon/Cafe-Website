import React, { useState } from 'react';

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Cappuccino', price: 3.5 },
    { id: 2, name: 'Latte', price: 4.0 },
    { id: 3, name: 'Espresso', price: 2.5 },
    { id: 4, name: 'Croissant', price: 2.0 },
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (index) => {
    const newCart = cart.filter((_, i) => i !== index);
    setCart(newCart);
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted! You ordered ${cart.length} items.`);
    setCart([]);  // Clear cart after submitting
  };

  return (
    <div>
      <h2>Menu</h2>
      <ul>
        {menuItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price.toFixed(2)} 
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </li>
        ))}
      </ul>

      <div>
        <h3>Your Cart</h3>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.name} - ${item.price.toFixed(2)} 
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      </div>

      {cart.length > 0 && (
        <form onSubmit={handleOrderSubmit}>
          <button type="submit">Submit Order</button>
        </form>
      )}
    </div>
  );
};

export default Menu;

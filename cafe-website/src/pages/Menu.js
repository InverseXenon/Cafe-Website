import React, { useState } from 'react';
import styled from 'styled-components';

// Styled components for grid layout
const MenuContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 20px;
  padding: 20px;
`;

const MenuItem = styled.div`
  background-color: #f8f8f8;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const CartItem = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;

const CartButtons = styled.div`
  button {
    margin: 0 5px;
  }
`;

const Menu = () => {
  const menuItems = [
    { id: 1, name: 'Cappuccino', price: 3.5 },
    { id: 2, name: 'Latte', price: 4.0 },
    { id: 3, name: 'Espresso', price: 2.5 },
    { id: 4, name: 'Croissant', price: 2.0 },
  ];

  const [cart, setCart] = useState([]);

  // Add item to cart or increase quantity if already in cart
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  // Decrease the quantity of an item in the cart
  const decreaseQuantity = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const handleOrderSubmit = (e) => {
    e.preventDefault();
    alert(`Order submitted! You ordered ${cart.length} items.`);
    setCart([]); // Clear cart after submitting
  };

  return (
    <div>
      <h2>Menu</h2>
      <MenuContainer>
        {menuItems.map((item) => (
          <MenuItem key={item.id}>
            <h3>{item.name}</h3>
            <p>${item.price.toFixed(2)}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </MenuItem>
        ))}
      </MenuContainer>

      <div>
        <h3>Your Cart</h3>
        {cart.length > 0 ? (
          cart.map((item) => (
            <CartItem key={item.id}>
              <div>
                {item.name} x{item.quantity} - ${item.price.toFixed(2)}
              </div>
              <CartButtons>
                <button onClick={() => addToCart(item)}>+</button>
                <button onClick={() => decreaseQuantity(item)}>-</button>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </CartButtons>
            </CartItem>
          ))
        ) : (
          <p>Your cart is empty.</p>
        )}
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
